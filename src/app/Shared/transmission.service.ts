import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carousserie } from '../models/Carousseries.models';
import { Modele } from '../models/Modeles.models';
import { Transmission } from '../models/Transmissions.models';

@Injectable({
  providedIn: 'root'
})
export class TransmissionService {
  url = 'http://localhost:8000/api/transmissions';
  transmissions: Transmission[];
  transmission: Transmission;

  constructor(private http: HttpClient) { }


  get(id) {
    return this.http.get(this.url + '/' + id);

  }

  getall() {
    this.http.get(this.url).toPromise().then(
      res => {
        this.transmissions = res as Transmission[];
      }
    );
  }

  post() {
    return this.http.post(this.url, this.transmission);
  }

  put() {
    return this.http.put(this.url + '/' + this.transmission.id, this.transmission);
  }

  delete() {
    return this.http.delete(this.url + '/' + this.transmission.id);
  }

}
