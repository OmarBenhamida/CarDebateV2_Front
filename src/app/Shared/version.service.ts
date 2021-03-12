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
    return this.http.get<Version>(this.url + '/' + id);

  }

 
  getall() {
    delete this.version.modele;

    return this.http.get(this.url + '/getAll');
}

  post() {
    delete this.version.modele;
    delete this.version.carburant;
    delete this.version.carousserie;
    delete this.version.transmission;

    return this.http.post(this.url, this.version);
  }

  put() {
    return this.http.put(this.url + '/' + this.version.id, this.version);
  }

  delete() {
    return this.http.delete(this.url + '/' + this.version.id);
  }

  getByModel(id){
    return this.http.get<Version[]>(this.url + '/getByModel/' + id);
  
  }

}
