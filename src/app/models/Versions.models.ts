import { Carburant } from "./Carburants.models";
import { Carousserie } from "./Carousseries.models";
import { Marque } from "./Marques.models";
import { Modele } from "./Modeles.models";
import { Transmission } from "./Transmissions.models";

export class Version {

    id: number;
    name: string;
    annee: number;
    prix: number;
    //moteur et trasmission
    moteur: string;
    architecture: number;
    cylindree: number;
    puissancefiscale: number;
    Puissancemaxi: number;
    coupleMaxi: number;
    boiteAvitesse: string;
    // a reverfier le type
    palettesAuvolant : boolean;
    consVille: number;
    consRoute: number;
    consMixte: number;
    emissionCO2: number;
    vitessemaxi: number;
    acceleration: number;
    // Dimension et volumes

    categorie: string;
    nbPlace: number;
    poidsaVide: number;
    longueur: number;
    largeur: number;
    hauteur: number;
    empattement: number;
    volumedureservoir: number;
    volumedecoffre: number;
    // sécurité
    airbag: number;
    // a reverifier le type
    aBS: boolean;
    eSP: boolean;
    antipatinage: boolean;
    aideFreinageUrgence: boolean;
    antiDemarrageElectronique: boolean;
    aideDemarragEnCote: boolean;
    selecteurdemodedeconduite: boolean;
    detectionFatigue: boolean;
    systemeAlerteFranchissementLigne: boolean;
    detecteurAngleMort: boolean;
    detecteurSousGonflage: boolean;
    fermeturePortesEnRoulant: boolean;
    systemeAlarme: boolean;
    pharesAntibrouillard: boolean;
    preparationISOFIX: boolean;
    //Confort: boolean;
    climatisation: string;
    systemeaudio: string;
    ordinateurBord: boolean;
    startStop: boolean;
    regulateurVitesse: boolean;
    regulateurVitesseAdaptatif: boolean;
    detecteurPluie: boolean;
    allumageAutoFeux: boolean;
    freinMainElectrique: boolean;
    ecranTactile: boolean;
    instrumentationBordDigitale: boolean;
    reconnaissancePanneaux: boolean;
    affichageTêteHaute: boolean;
    aideStationnement: string;
    cameraRecul: boolean;
    parkAssistAuto: boolean;
    commandesVolant: boolean;
    volantReglable: string;
    vitresEblectriques: string;
    retroviseursElectriques: boolean;

    retroviseursRabattablesElectriquement: boolean;
    ouvertureAutoCoffre: boolean;
    demarrageMainslibres: boolean;
    siegesElectriques: string;
    banquetteArriereRabattable: boolean;
    gPS: boolean;
    connexionInternet: boolean;
    bluetooth: boolean;

    followmehome: boolean;
    //Decor
    Jantes: string;
    volantCuir: boolean;
    feuxJourLED: boolean;
    pharesLED: boolean;
    pharesXenon: boolean;
    vitresTeintee: boolean;
    sellerie: string;
    toit: boolean;
    barresToit: boolean;
    idmodel : number;
    idcarburant : number;
    idtransmission : number;
    idcarrousserie : number;

    modele: Modele;
    carburant: Carburant;
    transmission: Transmission;
    carousserie: Carousserie;


}