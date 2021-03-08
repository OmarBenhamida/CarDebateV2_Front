import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Modele } from 'src/app/models/Modeles.models';
import { MarqueService } from 'src/app/Shared/marque.service';
import { ModeleService } from 'src/app/Shared/modele.service';

@Component({
  selector: 'app-modele',
  templateUrl: './modele.component.html',
  styleUrls: ['./modele.component.scss']
})
export class ModeleComponent implements OnInit {
  id: number;
  name: string;
  imageUrl: string;
  idmarque: number;
  t = [];

  constructor(public service: ModeleService, public uow: MarqueService, private router: Router) { }

  ngOnInit(): void {

    this.service.modele = {


      id: 0,
      name: null,
      imageUrl: null,
      idmarque: null,
      marque: null

    },

      this.getall();
    this.uow.getall();


  }



  filldata(item) {

    // this.service.om.id = item.id;
    // this.service.om.Libelle = item.Libelle;
    // this.service.om.lieu = item.lieu;
    // this.service.om.datedebut = item.datedebut;
    // this.service.om.datefin = item.datefin;
    // this.service.om.idemploye = item.idemploye;
    // this.service.om.employe
    this.service.modele = item;


  }
  filldata2(item) {


    this.service.modele = item;
    //this.router.navigate(['/administrateur/detailsom']);


  }



  filldataE(item) {

    this.uow.marque.id = item.id;
    this.uow.marque.name = item.name;
    this.uow.marque.imageUrl = item.imageUrl;

  }

  selectionChange() {
    // this.t = this.service.oms;
    // this.service.oms = [];
    if (+this.service.marque.id === 0) {

      this.t = this.service.modeles;

    } else {
      this.t = this.service.modeles.filter(e => +e.idmarque === +this.service.marque.id);

    }


  }

  getall() {

    this.service.getall().subscribe(
      res => {
        this.service.modeles = res as Modele[];
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