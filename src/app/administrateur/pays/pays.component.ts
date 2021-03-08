import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaysService } from 'src/app/Shared/pays.service';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.scss']
})
export class PaysComponent implements OnInit {
  id: number;
  name: string;
  imageUrl: string;





  constructor(public service: PaysService,private router: Router) { }

  ngOnInit(): void {

    this.service.pays = {

      id: 0,
      name: null,
      imageUrl:null,
      
    },

      this.service.getall();
  }

  filldata2(item) {


    this.service.pays = item;
    //this.router.navigate(['/administrateur/detailsemp']);


  }


  filldata(item) {

    this.service.pays.id = item.id;
    this.service.pays.name = item.name;
    this.service.pays.imageUrl = item.imageUrl;

   

  }

  submit() {
    console.log();
    this.service.post().subscribe(res => {
      this.service.getall();
    },
      err => {
        console.log(err);
      }
    );
  }


  modifier() {

    this.service.put().subscribe(res => {
      this.service.getall();
    },
      err => {
        console.log(err);
      }
    );
  }

  supprimer() {

    this.service.delete().subscribe(res => {
      this.service.getall();
    },
      err => {
        console.log(err);
      }
    );
  }
}