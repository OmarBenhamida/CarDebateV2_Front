import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carburant } from '../models/Carburants.models';
import { Annonce } from '../models/Annonces.models';
import { Commantaire } from '../models/Commantaires.models';

@Injectable({
  providedIn: 'root'
})
export class CommantaireService {
  url = 'http://localhost:8000/api/commantaires';
  commantaires: Commantaire[];
  commantaire: Commantaire;

  constructor(private http: HttpClient) { }


  get(id) {
    return this.http.get(this.url + '/' + id);

  }

  getall() {
    this.http.get(this.url).toPromise().then(
      res => {
        this.commantaires = res as Commantaire[];
      }
    );
  }

  post() {
    return this.http.post(this.url, this.commantaire);
  }

  put() {
    return this.http.put(this.url + '/' + this.commantaire.id, this.commantaire);
  }

  delete() {
    return this.http.delete(this.url + '/' + this.commantaire.id);
  }

}
