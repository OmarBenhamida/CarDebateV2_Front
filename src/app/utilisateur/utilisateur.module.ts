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



@NgModule({
  declarations: [AccueilComponent, UtilisateurComponent, ComparateurComponent, MarqueComponent, PromotionsComponent, ActualiteComponent],
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
