-- SUD IDF Executive Transport
-- Application atomique d'une modification après paiement confirmé du supplément.
-- Aucun remboursement n'est déclenché si le nouveau tarif est inférieur.

begin;

create or replace function public.traiter_modification_reservation(
  p_demande_id uuid,
  p_stripe_session_id text default null
)
returns jsonb
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_demande public.demandes_reservation%rowtype;
  v_reservation public.reservations%rowtype;
  v_details jsonb;
  v_montant_final numeric;
  v_nouveau_details jsonb;
begin
  select * into v_demande
    from public.demandes_reservation
   where id = p_demande_id
   for update;

  if not found then
    raise exception 'Modification introuvable.';
  end if;

  if v_demande.type_demande <> 'modification' then
    raise exception 'Cette opération ne correspond pas à une modification.';
  end if;

  if v_demande.statut = 'traitee' then
    return jsonb_build_object('success', true, 'already_processed', true,
      'reservation_id', v_demande.reservation_id);
  end if;

  if v_demande.statut <> 'en_attente' then
    raise exception 'Cette modification n’est plus en attente.';
  end if;

  v_details := coalesce(v_demande.details_modification, '{}'::jsonb);
  v_montant_final := nullif(v_details->>'montant_final_ttc', '')::numeric;
  if v_montant_final is null or v_montant_final <= 0 then
    raise exception 'Le montant final de la modification est invalide.';
  end if;

  select * into v_reservation
    from public.reservations
   where id = v_demande.reservation_id
   for update;

  if not found then
    raise exception 'Réservation introuvable.';
  end if;
  if v_reservation.type <> 'reservation'
     or v_reservation.statut_paiement <> 'paye'
     or lower(coalesce(v_reservation.statut, '')) in ('annulee', 'annulée') then
    raise exception 'La réservation ne peut plus être modifiée.';
  end if;

  -- Le montant final est le plus élevé entre le prix initial et le nouveau tarif.
  if v_montant_final < coalesce(v_reservation.montant_ttc, 0) then
    raise exception 'Une modification ne peut pas diminuer le montant initial.';
  end if;

  v_nouveau_details := coalesce(v_reservation.details, '{}'::jsonb)
    || coalesce(v_details->'details_prestation', '{}'::jsonb)
    || jsonb_build_object(
      'modification_appliquee', true,
      'modification_demande_id', v_demande.id,
      'modification_stripe_session_id', p_stripe_session_id,
      'montant_initial_avant_modification', v_reservation.montant_ttc,
      'montant_nouveau_calcule_ttc', v_details->'nouveau_prix_calcule_ttc',
      'montant_final_ttc', v_montant_final
    );

  update public.reservations
     set date_trajet = coalesce(v_demande.nouvelle_date_trajet, date_trajet),
         heure_trajet = coalesce(v_demande.nouvelle_heure_trajet, heure_trajet),
         depart = coalesce(v_demande.nouveau_depart, depart),
         arrivee = coalesce(v_demande.nouvelle_arrivee, arrivee),
         vehicule = coalesce(v_demande.nouveau_vehicule, vehicule),
         service = coalesce(v_details->>'service', service),
         montant_ttc = v_montant_final,
         details = v_nouveau_details,
         updated_at = now()
   where id = v_reservation.id;

  update public.demandes_reservation
     set statut = 'traitee'
   where id = v_demande.id;

  return jsonb_build_object('success', true, 'already_processed', false,
    'reservation_id', v_reservation.id, 'reference', v_reservation.reference,
    'montant_final_ttc', v_montant_final, 'email', v_reservation.email);
end;
$$;

revoke all on function public.traiter_modification_reservation(uuid, text) from public;
revoke all on function public.traiter_modification_reservation(uuid, text) from anon;
revoke all on function public.traiter_modification_reservation(uuid, text) from authenticated;
grant execute on function public.traiter_modification_reservation(uuid, text) to service_role;

commit;
