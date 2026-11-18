-- SUD IDF Executive Transport
-- Annulation atomique : la demande est enregistrée et la réservation annulée
-- dans une seule transaction. Aucun remboursement Stripe n’est exécuté ici.

begin;

create or replace function public.traiter_annulation_reservation(
  p_reservation_id uuid,
  p_message text,
  p_taux_remboursement numeric,
  p_montant_remboursement numeric
)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_reservation public.reservations%rowtype;
  v_depart timestamptz;
  v_heures_avant numeric;
  v_taux_attendu numeric;
  v_montant_attendu numeric;
  v_demande_id uuid;
begin
  select *
    into v_reservation
    from public.reservations
   where id = p_reservation_id
   for update;

  if not found then
    raise exception 'Réservation introuvable.';
  end if;

  if v_reservation.type <> 'reservation' then
    raise exception 'Ce dossier n’est pas une réservation.';
  end if;

  if v_reservation.statut_paiement <> 'paye' then
    raise exception 'Le paiement de cette réservation n’est pas confirmé.';
  end if;

  if lower(coalesce(v_reservation.statut, '')) in ('annulee', 'annulée') then
    raise exception 'Cette réservation est déjà annulée.';
  end if;

  if coalesce(v_reservation.date_trajet, '') !~ '^\d{4}-\d{2}-\d{2}$'
     or coalesce(v_reservation.heure_trajet, '') !~ '^\d{2}:\d{2}(:\d{2})?$' then
    raise exception 'La date ou l’heure de départ est invalide.';
  end if;

  v_depart := ((v_reservation.date_trajet || ' ' || v_reservation.heure_trajet)::timestamp without time zone)
              at time zone 'Europe/Paris';
  v_heures_avant := extract(epoch from (v_depart - now())) / 3600;

  if v_heures_avant < 0 then
    raise exception 'L’annulation n’est plus possible après le départ.';
  elsif v_heures_avant >= 48 then
    v_taux_attendu := 100;
  else
    v_taux_attendu := 50;
  end if;

  if p_taux_remboursement is distinct from v_taux_attendu then
    raise exception 'Le taux de remboursement a changé. Veuillez réessayer.';
  end if;

  v_montant_attendu := round(coalesce(v_reservation.montant_ttc, 0) * v_taux_attendu / 100, 2);
  if p_montant_remboursement is distinct from v_montant_attendu then
    raise exception 'Le montant de remboursement calculé ne correspond pas au dossier.';
  end if;

  insert into public.demandes_reservation (
    reservation_id, type_demande, message, statut, details_modification
  ) values (
    v_reservation.id,
    'annulation',
    coalesce(nullif(btrim(p_message), ''), 'Annulation demandée par le client.'),
    'traitee',
    jsonb_build_object(
      'taux_remboursement', v_taux_attendu,
      'montant_remboursement_manuel', v_montant_attendu,
      'remboursement_automatique', false,
      'a_traiter_manuellement_dans_stripe', v_montant_attendu > 0
    )
  )
  returning id into v_demande_id;

  update public.reservations
     set statut = 'annulee',
         montant_rembourse = v_montant_attendu,
         annulation_en_cours = false,
         updated_at = now()
   where id = v_reservation.id;

  return v_demande_id;
end;
$$;

revoke all on function public.traiter_annulation_reservation(uuid, text, numeric, numeric) from public;
revoke all on function public.traiter_annulation_reservation(uuid, text, numeric, numeric) from anon;
revoke all on function public.traiter_annulation_reservation(uuid, text, numeric, numeric) from authenticated;
grant execute on function public.traiter_annulation_reservation(uuid, text, numeric, numeric) to service_role;

commit;
