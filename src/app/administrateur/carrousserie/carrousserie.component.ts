import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarousserieService } from 'src/app/Shared/carousserie.service';

@Component({
  selector: 'app-carrousserie',
  templateUrl: './carrousserie.component.html',
  styleUrls: ['./carrousserie.component.scss']
})
export class CarrousserieComponent implements OnInit {

  id: number;
  name: string;




  constructor(public service: CarousserieService,private router: Router) { }

  ngOnInit(): void {

    this.service.carousserie = {

      id: 0,
      name: null,
      
    },

      this.service.getall();
  }

  filldata2(item) {


    this.service.carousserie = item;
    //this.router.navigate(['/administrateur/detailsemp']);


  }


  filldata(item) {

    this.service.carousserie.id = item.id;
    this.service.carousserie.name = item.name;
   

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



}

