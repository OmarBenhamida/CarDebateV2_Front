import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Modele } from 'src/app/models/Modeles.models';
import { Version } from 'src/app/models/Versions.models';
import { MarqueService } from 'src/app/Shared/marque.service';
import { ModeleService } from 'src/app/Shared/modele.service';
import { VersionService } from 'src/app/Shared/version.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  marques = this.service.getall();
  modeles : Modele[] = [];
  versions : Version[] = []
  constructor(public service : MarqueService,public service1 : ModeleService,public service2 : VersionService, 
    private router: Router) { }

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

    this.router.navigate(["/utilisateur/version",e.target.value])


  }


}
