import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carousserie } from '../models/Carousseries.models';

@Injectable({
  providedIn: 'root'
})
export class CarousserieService {
  url = 'http://localhost:8000/api/carousseries';
  carousseries: Carousserie[];
  carousserie: Carousserie;

  constructor(private http: HttpClient) { }


  get(id) {
    return this.http.get(this.url + '/' + id);

  }

  getall() {
    this.http.get(this.url).toPromise().then(
      res => {
        this.carousseries = res as Carousserie[];
      }
    );
  }

  post() {
    return this.http.post(this.url, this.carousserie);
  }

  put() {
    return this.http.put(this.url + '/' + this.carousserie.id, this.carousserie);
  }

  delete() {
    return this.http.delete(this.url + '/' + this.carousserie.id);
  }

}
