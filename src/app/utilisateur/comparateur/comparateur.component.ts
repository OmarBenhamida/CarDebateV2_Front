import { Component, OnInit,  } from '@angular/core';
import { Modele } from 'src/app/models/Modeles.models';
import { Version } from 'src/app/models/Versions.models';
import { MarqueService } from 'src/app/Shared/marque.service';
import { ModeleService } from 'src/app/Shared/modele.service';
import { VersionService } from 'src/app/Shared/version.service';

@Component({
  selector: 'app-comparateur',
  templateUrl: './comparateur.component.html',
  styleUrls: ['./comparateur.component.scss']
})
export class ComparateurComponent implements OnInit {

  marques = this.service.getall();
  modeles : Modele[] = [];
  versions : Version[] = []
  
  v1: Version;
  v2: Version;
  v3: Version;
  v4: Version;

  carNumber = 1;
  constructor(public service : MarqueService,public service1 : ModeleService,public service2 : VersionService,) {
  
   }

  ngOnInit(): void {
    
  }

  marqueChange(e) {
    console.log(e.target.value)
    this.service1.getByMarque(e.target.value).subscribe( r => {
      this.modeles = r;
    } )

  }

  modeleChange(e) {
    console.log(e.target.value)
 
    this.service2.getByModel(e.target.value).subscribe( r => {
      this.versions = r;
    } )

  }

  recherche(e){

    this.service2.get(e.target.value).subscribe(r => {

      switch (this.carNumber) {
        case 1: this.v1 = r;break;
        case 2: this.v2 = r;break;
        case 3: this.v3 = r;break;
        case 4: this.v4 = r;break;
      
        default: break;
      }
    } )

  }

  

}
