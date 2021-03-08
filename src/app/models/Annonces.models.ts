import { Utilisateur } from "./Utilisateurs.models";

export class Annonce {

    id: number;
    marque: string;
    modele: string;
    prix: number;
    km: number;
    carburant: string;
    annee: number;
    puissancF: number;
    cc: number;
    utilisateur: Utilisateur;

}