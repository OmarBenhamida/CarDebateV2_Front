import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarburantService } from 'src/app/Shared/carburant.service';

@Component({
  selector: 'app-carburant',
  templateUrl: './carburant.component.html',
  styleUrls: ['./carburant.component.scss']
})
export class CarburantComponent implements OnInit {


  id: number;
  name: string;




  constructor(public service: CarburantService,private router: Router) { }

  ngOnInit(): void {

    this.service.carburant = {

      id: 0,
      name: null,
      
    },

      this.service.getall();
  }

  filldata2(item) {


    this.service.carburant = item;
    //this.router.navigate(['/administrateur/detailsemp']);


  }


  filldata(item) {

    this.service.carburant.id = item.id;
    this.service.carburant.name = item.name;
   

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

