import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Version } from '../models/Versions.models';
import { Modele } from '../models/Modeles.models';
import { Carburant } from '../models/Carburants.models';
import { Transmission } from '../models/Transmissions.models';
import { Carousserie } from '../models/Carousseries.models';


@Injectable({
  providedIn: 'root'
})
export class VersionService {
  url = 'http://localhost:8000/api/versions';
  versions: Version[];
  version: Version;
  modele : Modele;
  carburant : Carburant;
  transmission : Transmission;
  carousserie : Carousserie;


  constructor(private http: HttpClient) { }


  get(id) {
    return this.http.get(this.url + '/' + id);

  }

 
  getall() {
    return this.http.get(this.url + '/getAll');
}

  post() {
    return this.http.post(this.url, this.version);
  }

  put() {
    return this.http.put(this.url + '/' + this.version.id, this.version);
  }

  delete() {
    return this.http.delete(this.url + '/' + this.version.id);
  }

}
