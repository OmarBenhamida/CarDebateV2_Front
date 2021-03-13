import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyGuard } from './Shared/my.guard';

const routes: Routes = [
  { path: '', redirectTo: 'utilisateur', pathMatch: 'full'},
  //{ path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule), },
 // tslint:disable-next-line:max-line-length
 { path: 'administrateur', loadChildren: () => import('./administrateur/administrateur.module').then(m => m.AdministrateurModule), canActivate: [MyGuard]},
 // tslint:disable-next-line:max-line-length
 { path: 'utilisateur', loadChildren: () => import('./utilisateur/utilisateur.module').then(m => m.UtilisateurModule), /*canActivate: [MyGuard]*/},
 { path: 'authentification', loadChildren: () => import('./authentification/authentification.module').then(m => m.AuthentificationModule), /*canActivate: [MyGuard]*/},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



