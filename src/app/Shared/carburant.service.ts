import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carburant } from '../models/Carburants.models';

@Injectable({
  providedIn: 'root'
})
export class CarburantService {
  url = 'http://localhost:8000/api/carburants';
  carburants: Carburant[];
  carburant: Carburant;

  constructor(private http: HttpClient) { }


  get(id) {
    return this.http.get(this.url + '/' + id);

  }

  getall() {
    this.http.get(this.url).toPromise().then(
      res => {
        this.carburants = res as Carburant[];
      }
    );
  }

  post() {
    return this.http.post(this.url, this.carburant);
  }

  put() {
    return this.http.put(this.url + '/' + this.carburant.id, this.carburant);
  }

  delete() {
    return this.http.delete(this.url + '/' + this.carburant.id);
  }

}
