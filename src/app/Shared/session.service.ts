import { Injectable } from '@angular/core';
import { Utilisateur } from '../models/Utilisateurs.models';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  user: Utilisateur = null;

  constructor() { }
}