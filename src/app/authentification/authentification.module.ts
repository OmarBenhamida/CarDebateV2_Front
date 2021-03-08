import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthentificationComponent } from './authentification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthentificationRoutingModule } from './authentification-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [LoginComponent, AuthentificationComponent],
  imports: [
    AuthentificationRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class AuthentificationModule { }
