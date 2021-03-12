import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Img_v } from 'src/app/models/Img_v_s.models';
import { Img_vService } from 'src/app/Shared/img_v_s.service';
import { VersionService } from 'src/app/Shared/version.service';

@Component({
  selector: 'app-image-version',
  templateUrl: './image-version.component.html',
  styleUrls: ['./image-version.component.scss']
})
export class ImageVersionComponent implements OnInit {

  id: number;
  imageUrl: string;
  idversion: number;
  t = [];

  constructor(public service: Img_vService, public uow: VersionService, private router: Router) { }

  ngOnInit(): void {

    this.service.img_v = {


      id: 0,
      imageUrl: null,
      idversion: null,
      version: null

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
    this.service.img_v = item;


  }
  filldata2(item) {


    this.service.img_v = item;
    //this.router.navigate(['/administrateur/detailsom']);


  }



  filldataE(item) {

    // this.uow.pays.id = item.id;
    // this.uow.pays.name = item.name;
    // this.uow.pays.imageUrl = item.imageUrl;

  }

  // selectionChange() {
  //   // this.t = this.service.oms;
  //   // this.service.oms = [];
  //   if (+this.service.pays.id === 0) {

  //     this.t = this.service.marques;

  //   } else {
  //     this.t = this.service.marques.filter(e => +e.idpays === +this.service.pays.id);

  //   }


  // }

  getall() {

    this.service.getall().subscribe(
      res => {
        this.service.img_vs = res as Img_v[];
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