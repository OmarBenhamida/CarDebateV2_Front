import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pays } from '../models/pays.models';

@Injectable({
  providedIn: 'root'
})
export class PaysService {
  url = 'http://localhost:8000/api/pays';
  payss: Pays[];
  pays: Pays;

  constructor(private http: HttpClient) { }


  get(id) {
    return this.http.get(this.url + '/' + id);

  }

  getall() {
    this.http.get(this.url).toPromise().then(
      res => {
        this.payss = res as Pays[];
      }
    );
  }

  post() {
    return this.http.post(this.url, this.pays);
  }

  put() {
    return this.http.put(this.url + '/' + this.pays.id, this.pays);
  }

  delete() {
    return this.http.delete(this.url + '/' + this.pays.id);
  }

}
