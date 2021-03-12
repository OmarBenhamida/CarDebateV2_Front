import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pays } from '../models/pays.models';
import { Marque } from '../models/Marques.models';
import { Version } from '../models/Versions.models';

@Injectable({
    providedIn: 'root'
})
export class MarqueService {
    url = 'http://localhost:8000/api/marques';
    marques: Marque[];
    marque: Marque;
    pays: Pays;
    constructor(private http: HttpClient) { }

  


    get(id) {
        return this.http.get<Marque>(this.url + '/' + id);

    }

    getall() {
        return this.http.get<Marque[]>(this.url + '/getAll');
    }
    
      

    getall2() {
        this.http.get(this.url).toPromise().then(
            res => {
                this.marques = res as Marque[];
            }
        );
    }

    post() {
        delete this.marque.pays;
        return this.http.post(this.url, this.marque);
    }

    put() {
        delete this.marque.pays;
        return this.http.put(this.url + '/' + this.marque.id, this.marque);
    }

    delete() {
        return this.http.delete(this.url + '/' + this.marque.id);
    }




}
