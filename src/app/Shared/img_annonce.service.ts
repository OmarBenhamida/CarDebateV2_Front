import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carburant } from '../models/Carburants.models';
import { Annonce } from '../models/Annonces.models';
import { Commantaire } from '../models/Commantaires.models';
import { Img_annonce } from '../models/Img_annonces.models';

@Injectable({
  providedIn: 'root'
})
export class Img_annonceService {
  url = 'http://localhost:8000/api/img_annonces';
  img_annonces: Img_annonce[];
  img_annonce: Img_annonce;

  constructor(private http: HttpClient) { }


  get(id) {
    return this.http.get(this.url + '/' + id);

  }

  getall() {
    this.http.get(this.url).toPromise().then(
      res => {
        this.img_annonces = res as Img_annonce[];
      }
    );
  }

  post() {
    return this.http.post(this.url, this.img_annonce);
  }

  put() {
    return this.http.put(this.url + '/' + this.img_annonce.id, this.img_annonce);
  }

  delete() {
    return this.http.delete(this.url + '/' + this.img_annonce.id);
  }

}
