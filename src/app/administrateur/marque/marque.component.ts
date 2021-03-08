import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Marque } from 'src/app/models/Marques.models';
import { MarqueService } from 'src/app/Shared/marque.service';
import { PaysService } from 'src/app/Shared/pays.service';

@Component({
  selector: 'app-marque',
  templateUrl: './marque.component.html',
  styleUrls: ['./marque.component.scss']
})
export class MarqueComponent implements OnInit {
  id: number;
  name: string;
  imageUrl: string;
  idpays: number;
  t = [];

  constructor(public service: MarqueService, public uow: PaysService, private router: Router) { }

  ngOnInit(): void {

    this.service.marque = {


      id: 0,
      name: null,
      imageUrl: null,
      idpays: null,
      pays: null

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
    this.service.marque = item;


  }
  filldata2(item) {


    this.service.marque = item;
    //this.router.navigate(['/administrateur/detailsom']);


  }



  filldataE(item) {

    this.uow.pays.id = item.id;
    this.uow.pays.name = item.name;
    this.uow.pays.imageUrl = item.imageUrl;

  }

  selectionChange() {
    // this.t = this.service.oms;
    // this.service.oms = [];
    if (+this.service.pays.id === 0) {

      this.t = this.service.marques;

    } else {
      this.t = this.service.marques.filter(e => +e.idpays === +this.service.pays.id);

    }


  }

  getall() {

    this.service.getall().subscribe(
      res => {
        this.service.marques = res as Marque[];
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