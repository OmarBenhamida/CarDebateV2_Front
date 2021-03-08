import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carousserie } from '../models/Carousseries.models';
import { Modele } from '../models/Modeles.models';
import { Marque } from '../models/Marques.models';

@Injectable({
  providedIn: 'root'
})
export class ModeleService {
  url = 'http://localhost:8000/api/modeles';
  modeles: Modele[];
  modele: Modele;
  marque : Marque;

  constructor(private http: HttpClient) { }


  get(id) {
    return this.http.get(this.url + '/' + id);

  }

  getall() {
    delete this.modele.marque;

    return this.http.get(this.url + '/getAll');
}

  post() {
    delete this.modele.marque;

    return this.http.post(this.url, this.modele);
  }

  put() {
    return this.http.put(this.url + '/' + this.modele.id, this.modele);
  }

  delete() {
    return this.http.delete(this.url + '/' + this.modele.id);
  }

}
