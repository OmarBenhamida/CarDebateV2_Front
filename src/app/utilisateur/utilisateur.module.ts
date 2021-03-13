import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil/accueil.component';
import { UtilisateurComponent } from './utilisateur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { UtilisateurRoutingModule } from './utilisateur-routing.module';
import { ComparateurComponent } from './comparateur/comparateur.component';
import { MarqueComponent } from './marque/marque.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { VersionComponent } from './version/version.component';
import { ModeleComponent } from './modele/modele.component';
import { OffresComponent } from './offres/offres.component';
import { Offre1Component } from './offres/offre1/offre1.component';
import { Offre2Component } from './offres/offre2/offre2.component';
import { Offre3Component } from './offres/offre3/offre3.component';
import { Offre4Component } from './offres/offre4/offre4.component';



@NgModule({
  declarations: [AccueilComponent, UtilisateurComponent, ComparateurComponent, MarqueComponent, PromotionsComponent, ActualiteComponent, ModeleComponent, VersionComponent, OffresComponent, Offre1Component, Offre2Component, Offre3Component, Offre4Component],
  imports: [
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    UtilisateurRoutingModule,

  ]
})
export class UtilisateurModule { }
