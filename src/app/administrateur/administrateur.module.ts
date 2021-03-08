import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarqueComponent } from './marque/marque.component';
import { ModeleComponent } from './modele/modele.component';
import { CarrousserieComponent } from './carrousserie/carrousserie.component';
import { TransmissionComponent } from './transmission/transmission.component';
import { CarburantComponent } from './carburant/carburant.component';
import { PaysComponent } from './pays/pays.component';
import { VersionComponent } from './version/version.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { ImageVersionComponent } from './image-version/image-version.component';
import { MenuComponent } from './menu/menu.component';
import { AdministrateurRoutingModule } from './administrateur-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdministrateurComponent } from './administrateur.component';



@NgModule({
  declarations: [MarqueComponent,
                 ModeleComponent, CarrousserieComponent,
                  TransmissionComponent, CarburantComponent,
                   PaysComponent, VersionComponent,
                    AnnonceComponent,
                     ImageVersionComponent,
                      AdministrateurComponent,
                       MenuComponent],
  imports: [
    CommonModule,
    AdministrateurRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdministrateurModule { }
