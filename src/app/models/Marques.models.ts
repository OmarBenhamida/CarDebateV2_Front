import { Pays } from "./pays.models";

export class Marque {

    id: number;
    name: string;
    imageUrl: string;
    idpays : number;
    pays: Pays;

}
