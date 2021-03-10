import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.scss']
})
export class AnnonceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  test(){

    var name = $("#txtName").val();
    alert(name);
  }

}
