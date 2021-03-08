import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carburant } from '../models/Carburants.models';
import { Annonce } from '../models/Annonces.models';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  url = 'http://localhost:8000/api/annonces';
  annonces: Annonce[];
  annonce: Annonce;

  constructor(private http: HttpClient) { }


  get(id) {
    return this.http.get(this.url + '/' + id);

  }

  getall() {
    this.http.get(this.url).toPromise().then(
      res => {
        this.annonces = res as Annonce[];
      }
    );
  }

  post() {
    return this.http.post(this.url, this.annonce);
  }

  put() {
    return this.http.put(this.url + '/' + this.annonce.id, this.annonce);
  }

  delete() {
    return this.http.delete(this.url + '/' + this.annonce.id);
  }

}
