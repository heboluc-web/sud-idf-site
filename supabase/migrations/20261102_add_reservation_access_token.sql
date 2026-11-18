-- SUD IDF Executive Transport
-- La colonne jeton_acces_hash existe déjà dans la base de production.
-- Cette migration conserve uniquement l’index unique partiel pour sécuriser
-- l’unicité des jetons non nuls.

begin;

create unique index if not exists reservations_jeton_acces_hash_uidx
  on public.reservations (jeton_acces_hash)
  where jeton_acces_hash is not null;

commit;
