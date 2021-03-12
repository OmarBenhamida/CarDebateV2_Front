import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carburant } from '../models/Carburants.models';
import { Annonce } from '../models/Annonces.models';
import { Commantaire } from '../models/Commantaires.models';
import { Img_annonce } from '../models/Img_annonces.models';
import { Img_v } from '../models/Img_v_s.models';

@Injectable({
  providedIn: 'root'
})
export class Img_vService {
  url = 'http://localhost:8000/api/imgVs';
  img_vs: Img_v[];
  img_v: Img_v;

  constructor(private http: HttpClient) { }


  get(id) {
    return this.http.get(this.url + '/' + id);

  }

  getall() {
    //delete this.modele.marque;

    return this.http.get(this.url + '/getAll');
}

  post() {
    delete this.img_v.version;
    return this.http.post(this.url, this.img_v);
  }

  put() {
    return this.http.put(this.url + '/' + this.img_v.id, this.img_v);
  }

  delete() {
    return this.http.delete(this.url + '/' + this.img_v.id);
  }

}
