/**
 * Moteur tarifaire serveur de SUD IDF Executive Transport.
 *
 * Les montants et les règles ci-dessous reprennent le calcul actuellement
 * utilisé dans app/reservation/page.tsx. Le formulaire public n'est pas modifié.
 * Tous les montants retournés sont TTC.
 */

export type TarifTrajetInput = {
  depart: string;
  arrivee: string;
  heure: string;
  vehicule: string;
  service: string;
  distanceMeters: number;
  distanceText?: string;
  dureeText?: string;
};

export type TarifResult = {
  prixTTC: number;
  detailsPrix: string;
  distanceText: string;
  dureeText: string;
};

export type TarifSimpleResult = {
  prixTTC: number;
  detailsPrix: string;
  distanceText: string;
  dureeText: string;
};

const TARIFS_JOUR: Record<string, Record<string, number>> = {
  "Mercedes Classe E": {
    parisParis: 100, parisAsterix: 129, parisOrly: 110, parisCDG: 127,
    cdgOrly: 152, parisLeBourget: 127, parisDisney: 152,
    parisVersailles: 127, parisBeauvais: 212, parisChantilly: 169,
  },
  "Mercedes Classe V": {
    parisParis: 110, parisAsterix: 169, parisOrly: 144, parisCDG: 161,
    cdgOrly: 195, parisLeBourget: 161, parisDisney: 186,
    parisVersailles: 161, parisBeauvais: 254, parisChantilly: 212,
  },
  "Range Rover": {
    parisParis: 130, parisAsterix: 199, parisOrly: 169, parisCDG: 186,
    cdgOrly: 220, parisLeBourget: 186, parisDisney: 220,
    parisVersailles: 186, parisBeauvais: 297, parisChantilly: 246,
  },
  "Mercedes Classe S": {
    parisParis: 150, parisAsterix: 219, parisOrly: 152, parisCDG: 169,
    cdgOrly: 203, parisLeBourget: 195, parisDisney: 212,
    parisVersailles: 169, parisBeauvais: 280, parisChantilly: 237,
  },
  "Mercedes-Maybach Classe S": {
    parisParis: 170, parisAsterix: 269, parisOrly: 212, parisCDG: 237,
    cdgOrly: 254, parisLeBourget: 254, parisDisney: 280,
    parisVersailles: 237, parisBeauvais: 339, parisChantilly: 297,
  },
};

const TARIFS_KM_JOUR: Record<string, number> = {
  "Mercedes Classe E": 2.2,
  "Mercedes Classe V": 2.8,
  "Range Rover": 3.2,
  "Mercedes Classe S": 3.5,
  "Mercedes-Maybach Classe S": 4.5,
};

const MINIMUM_JOUR: Record<string, number> = {
  "Mercedes Classe E": 55,
  "Mercedes Classe V": 70,
  "Range Rover": 80,
  "Mercedes Classe S": 90,
  "Mercedes-Maybach Classe S": 120,
};

const TARIFS_HORAIRES: Record<string, number> = {
  "Mercedes Classe E": 90,
  "Mercedes Classe V": 100,
  "Mercedes Classe S": 130,
  "Mercedes-Maybach Classe S": 170,
  "Range Rover": 120,
};

const TARIFS_SEMINAIRE: Record<string, Record<string, number>> = {
  "Mercedes Classe E": { "4": 350, "8": 650 },
  "Mercedes Classe V": { "4": 430, "8": 780 },
  "Range Rover": { "4": 500, "8": 850 },
  "Mercedes Classe S": { "4": 520, "8": 920 },
  "Mercedes-Maybach Classe S": { "4": 680, "8": 1180 },
};

function heureEstNuit(heure: string): boolean {
  const heureCourse = Number.parseInt(String(heure || "12").split(":")[0] || "12", 10);
  return heureCourse >= 19 || heureCourse < 7;
}

function contient(texte: string, valeurs: string[]): boolean {
  return valeurs.some((valeur) => texte.includes(valeur));
}

function distanceEnKm(distanceMeters: number, distanceText = ""): number {
  if (Number.isFinite(distanceMeters) && distanceMeters > 0) {
    return distanceMeters / 1000;
  }
  const valeur = Number(distanceText.replace(",", ".").replace(/[^0-9.]/g, ""));
  return Number.isFinite(valeur) ? valeur : 0;
}

export function calculerTarifTrajet(input: TarifTrajetInput): TarifResult | null {
  const distanceText = input.distanceText || `${(input.distanceMeters / 1000).toFixed(1)} km`;
  const dureeText = input.dureeText || "";
  const departNormalise = input.depart.toLowerCase();
  const arriveeNormalisee = input.arrivee.toLowerCase();
  const texteTrajet = `${departNormalise} ${arriveeNormalisee}`;
  const estNuit = heureEstNuit(input.heure);
  const contientParis = texteTrajet.includes("paris");
  const departEstParis = departNormalise.includes("paris") || departNormalise.includes("750");
  const arriveeEstParis = arriveeNormalisee.includes("paris") || arriveeNormalisee.includes("750");
  const trajetParisParis = departEstParis && arriveeEstParis;

  const contientCDG = contient(texteTrajet, [
    "cdg", "charles de gaulle", "charles-de-gaulle", "roissy", "terminal 1",
    "terminal 2a", "terminal 2b", "terminal 2c", "terminal 2d", "terminal 2e",
    "terminal 2f", "terminal 2g", "terminal 3", "le mesnil-amelot",
    "le mesnil amelot", "77990",
  ]) || /\bt1\b|\bt2a\b|\bt2b\b|\bt2c\b|\bt2d\b|\bt2e\b|\bt2f\b|\bt2g\b|\bt3\b/.test(texteTrajet);

  const contientOrly = contient(texteTrajet, [
    "orly", "paris-orly", "terminal 1 orly", "terminal 2 orly",
    "terminal 3 orly", "terminal 4 orly", "orly 1", "orly 2", "orly 3", "orly 4",
  ]);
  const contientLeBourget = contient(texteTrajet, ["le bourget", "paris-le bourget", "93350"]);
  const contientBeauvais = contient(texteTrajet, [
    "beauvais", "bva", "tillé", "tille", "60000", "rte de l'aéroport", "route de l'aéroport",
  ]);
  const contientDisney = contient(texteTrajet, [
    "disneyland", "disneyland paris", "marne-la-vallée", "marne la vallée",
    "marne-la-vallee", "coupvray", "77700", "val d'europe", "val d’europe",
    "hotel disney", "hôtel disney", "newport bay", "sequoia lodge", "cheyenne",
    "santa fe", "marvel", "davy crockett", "explorers", "dream castle",
    "magic circus", "radisson blu",
  ]);
  const contientVersailles = contient(texteTrajet, ["versailles", "château de versailles", "chateau de versailles"]);
  const contientChantilly = contient(texteTrajet, ["chantilly", "château de chantilly", "chateau de chantilly"]);
  const contientAsterix = contient(texteTrajet, [
    "parc astérix", "parc asterix", "plailly", "60128", "arènes romaines", "arenes romaines",
  ]);

  const tarifsVehicule = TARIFS_JOUR[input.vehicule] || TARIFS_JOUR["Mercedes Classe V"];
  const tarifKmJour = TARIFS_KM_JOUR[input.vehicule] || 2.8;
  const minimumJour = MINIMUM_JOUR[input.vehicule] || 70;
  const tarifKm = estNuit ? tarifKmJour * 1.12 : tarifKmJour;
  const minimum = estNuit ? Math.round(minimumJour * 1.12) : minimumJour;
  const tarifsNuit = (tarif: number) => Math.round(tarif * 1.12);

  const trajetParisParisApplicable = trajetParisParis && !contientCDG && !contientOrly &&
    !contientLeBourget && !contientDisney && !contientVersailles &&
    !contientBeauvais && !contientChantilly && !contientAsterix;

  let prixTTC = 0;
  let detailsPrix = "";

  if (trajetParisParisApplicable) {
    prixTTC = tarifsVehicule.parisParis;
    detailsPrix = "Forfait Paris ↔ Paris";
  } else if (contientParis && contientCDG) {
    prixTTC = tarifsVehicule.parisCDG;
    detailsPrix = "Forfait Paris ↔ CDG";
  } else if (contientParis && contientOrly) {
    prixTTC = tarifsVehicule.parisOrly;
    detailsPrix = "Forfait Paris ↔ Orly";
  } else if (contientCDG && contientOrly) {
    prixTTC = tarifsVehicule.cdgOrly;
    detailsPrix = "Forfait CDG ↔ Orly";
  } else if (contientParis && contientLeBourget) {
    prixTTC = tarifsVehicule.parisLeBourget;
    detailsPrix = "Forfait Paris ↔ Le Bourget";
  } else if (contientParis && contientDisney) {
    prixTTC = tarifsVehicule.parisDisney;
    detailsPrix = "Forfait Paris ↔ Disneyland";
  } else if (contientParis && contientVersailles) {
    prixTTC = tarifsVehicule.parisVersailles;
    detailsPrix = "Forfait Paris ↔ Versailles";
  } else if (contientParis && contientBeauvais) {
    prixTTC = tarifsVehicule.parisBeauvais;
    detailsPrix = "Forfait Paris ↔ Beauvais";
  } else if (contientParis && contientChantilly) {
    prixTTC = tarifsVehicule.parisChantilly;
    detailsPrix = "Forfait Paris ↔ Chantilly";
  } else if (contientParis && contientAsterix) {
    prixTTC = tarifsVehicule.parisAsterix;
    detailsPrix = "Forfait Paris ↔ Parc Astérix";
  } else {
    const km = distanceEnKm(input.distanceMeters, distanceText);
    if (!Number.isFinite(km) || km <= 0) return null;
    const prixKilometrique = km * tarifKm;
    prixTTC = Math.max(prixKilometrique, minimum);
    detailsPrix = `${input.service === "Transport standard" ? "Transport standard régional" : "Transport régional"} — ${km.toFixed(1)} km × ${tarifKm.toFixed(2).replace(".", ",")} €/km${prixKilometrique < minimum ? ` — minimum ${minimum} €` : ""}`;
  }

  if (estNuit) {
    if (input.service !== "Transport standard" || trajetParisParisApplicable) {
      prixTTC = tarifsNuit(prixTTC);
    }
    detailsPrix += " — tarif nuit";
  }

  const trajetAvecAeroport = contientCDG || contientOrly || contientLeBourget || contientBeauvais;
  const trajetRegionalAvecAeroport = trajetAvecAeroport && !contientParis;
  const prixBasePourSeuilAeroport = estNuit ? prixTTC / 1.12 : prixTTC;
  if (trajetRegionalAvecAeroport && prixBasePourSeuilAeroport <= 154) {
    prixTTC += 20;
    detailsPrix += " — frais fixes aéroport : 20 € TTC";
  }

  return {
    prixTTC: Math.max(0, Math.round(prixTTC)),
    detailsPrix,
    distanceText,
    dureeText,
  };
}

export function calculerTarifMiseADispo(input: {
  vehicule: string;
  heure: string;
  dureeHeures: number;
}): TarifSimpleResult {
  const heures = Math.max(2, Math.trunc(input.dureeHeures || 3));
  const estNuit = heureEstNuit(input.heure);
  const tarifHoraire = TARIFS_HORAIRES[input.vehicule] || 100;
  const tarifHoraireFinal = estNuit ? Math.round(tarifHoraire * 1.12) : tarifHoraire;
  const prixTTC = heures * tarifHoraireFinal;
  const kmInclus = heures * 25;
  return {
    prixTTC: Math.round(prixTTC),
    detailsPrix: `${heures} h / ${kmInclus} km inclus${estNuit ? " — tarif nuit" : ""}`,
    distanceText: `${kmInclus} km inclus`,
    dureeText: `${heures} h`,
  };
}

export function calculerTarifSeminaire(input: {
  vehicule: string;
  heure: string;
  dureeHeures: 4 | 8;
}): TarifSimpleResult {
  const estForfait8h = input.dureeHeures === 8;
  const duree = String(input.dureeHeures);
  const tarifBase = TARIFS_SEMINAIRE[input.vehicule]?.[duree] ?? (estForfait8h ? 780 : 430);
  const estNuit = heureEstNuit(input.heure);
  const prixTTC = estNuit ? Math.round(tarifBase * 1.12) : tarifBase;
  const kmInclus = estForfait8h ? 200 : 100;
  return {
    prixTTC,
    detailsPrix: `Forfait séminaire : ${duree} h / ${kmInclus} km inclus${estNuit ? " — tarif nuit" : ""}`,
    distanceText: `${kmInclus} km inclus`,
    dureeText: `${duree} h`,
  };
}

export function calculerTarifAllerRetour(prixAller: number, prixRetour: number): number {
  return Math.max(0, Math.round(prixAller + prixRetour - 10));
}
