import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransmissionService } from 'src/app/Shared/transmission.service';

@Component({
  selector: 'app-transmission',
  templateUrl: './transmission.component.html',
  styleUrls: ['./transmission.component.scss']
})
export class TransmissionComponent implements OnInit {

  id: number;
  name: string;




  constructor(public service: TransmissionService,private router: Router) { }

  ngOnInit(): void {

    this.service.transmission = {

      id: 0,
      name: null,
      
    },

      this.service.getall();
  }

  filldata2(item) {


    this.service.transmission = item;
    //this.router.navigate(['/administrateur/detailsemp']);


  }


  filldata(item) {

    this.service.transmission.id = item.id;
    this.service.transmission.name = item.name;
   

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

