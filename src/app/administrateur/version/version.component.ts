import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Version } from 'src/app/models/Versions.models';
import { CarburantService } from 'src/app/Shared/carburant.service';
import { CarousserieService } from 'src/app/Shared/carousserie.service';
import { ModeleService } from 'src/app/Shared/modele.service';
import { TransmissionService } from 'src/app/Shared/transmission.service';
import { VersionService } from 'src/app/Shared/version.service';


@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss']
})
export class VersionComponent implements OnInit {

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
  palettesAuvolant: boolean;
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
  affichageTeteHaute: boolean;
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
  idmodel: number;
  idcarburant: number;
  idtransmission: number;
  idcarousserie : number;


  t = [];

  constructor(
    public service: VersionService, 
    public uow: ModeleService,
    public uox: CarburantService,
    public uoy: TransmissionService,
    public uov: CarousserieService, 
    private router: Router) { }

  ngOnInit(): void {

    this.service.version = {

   id: 0,name: null,annee: 0,prix: 0,
   //moteur et trasmission
   moteur: null,architecture: 0,cylindree: 0,puissancefiscale: 0,Puissancemaxi: 0,coupleMaxi: 0,boiteAvitesse: null,
   // a reverfier le type
   palettesAuvolant: null,consVille: 0,consRoute: 0,consMixte: 0,emissionCO2: 0,vitessemaxi: 0,acceleration: 0,
   // Dimension et volumes
   categorie: null,nbPlace: 0,poidsaVide: 0,longueur: 0,largeur: 0,hauteur: 0, empattement: 0,volumedureservoir: 0, volumedecoffre: 0,
   // sécurité
   airbag: 0, aBS: null,eSP: null,antipatinage: null,aideFreinageUrgence: null,antiDemarrageElectronique: null,aideDemarragEnCote: null,selecteurdemodedeconduite: null,detectionFatigue: null,systemeAlerteFranchissementLigne: null,detecteurAngleMort: null,detecteurSousGonflage: null, fermeturePortesEnRoulant: null,systemeAlarme: null,pharesAntibrouillard: null,preparationISOFIX: null,
   //Confort: null,
   climatisation: null, systemeaudio: null, ordinateurBord: null,startStop: null,regulateurVitesse: null,regulateurVitesseAdaptatif: null,detecteurPluie: null,allumageAutoFeux: null,freinMainElectrique: null,ecranTactile: null,instrumentationBordDigitale: null,reconnaissancePanneaux: null,affichageTeteHaute: null, aideStationnement: null, cameraRecul: null, parkAssistAuto: null, commandesVolant: null, volantReglable: null,vitresEblectriques: null,retroviseursElectriques: null,retroviseursRabattablesElectriquement: null, ouvertureAutoCoffre: null,demarrageMainslibres: null,siegesElectriques: null,banquetteArriereRabattable: null,gPS: null,connexionInternet: null,bluetooth: null,followmehome: null,
   //Decor
   Jantes: null, volantCuir: null, feuxJourLED: null, pharesLED: null, pharesXenon: null, vitresTeintee: null, sellerie: null,toit: null,barresToit: null,
   idmodel: 0,idcarburant: 0,idtransmission: 0,idcarousserie : 0,
 
   modele: null,carburant: null,transmission: null,carousserie: null

    },

    this.getall();
    this.uow.getall();
    this.uov.getall();
    this.uoy.getall();
    this.uox.getall();


  }



  filldata(item) {

    // this.service.om.id = item.id;
    // this.service.om.Libelle = item.Libelle;
    // this.service.om.lieu = item.lieu;
    // this.service.om.datedebut = item.datedebut;
    // this.service.om.datefin = item.datefin;
    // this.service.om.idemploye = item.idemploye;
    // this.service.om.employe
    this.service.version = item;


  }
  filldata2(item) {


    this.service.version = item;
    //this.router.navigate(['/administrateur/detailsom']);


  }



  filldataE(item) {

    this.uow.marque.id = item.id;
    this.uow.marque.name = item.name;
    this.uow.marque.imageUrl = item.imageUrl;

  }

  // selectionChange() {
  //   // this.t = this.service.oms;
  //   // this.service.oms = [];
  //   if (+this.service.marque.id === 0) {

  //     this.t = this.service.modeles;

  //   } else {
  //     this.t = this.service.modeles.filter(e => +e.idmarque === +this.service.marque.id);

  //   }


  // }

  getall() {

    this.service.getall().subscribe(
      res => {
        this.service.versions = res as Version[];
        this.t = res as any
        console.log(res);
      }
    );

  }



  submit() {
    console.log();
    this.service.post().subscribe(res => {
      this.getall();
    },
      err => {
        console.log(err);
      }
    );
  }


  modifier() {

    this.service.put().subscribe(res => {
      this.getall();
    },
      err => {
        console.log(err);
      }
    );
  }

  supprimer() {

    this.service.delete().subscribe(res => {
      this.getall();
    },
      err => {
        console.log(err);
      }
    );
  }
  search(id) {

    this.service.get(id).subscribe(res => {

      this.filldata(res);

      console.log(res);
    },
      err => {
        console.log(err);
      }
    );

  }
  

  

  restaurertable() {
    this.getall();
  }

  // imprimer() {

  //   this.router.navigate(['/administrateur/etatom', +this.service.om.id]);


  // }



}