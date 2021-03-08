import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  url = 'http://localhost:8000/api/utilisateurs';

  constructor(private http: HttpClient) { }



 login(model) {
    return this.http.post(this.url+ '/login', model);
  }

}