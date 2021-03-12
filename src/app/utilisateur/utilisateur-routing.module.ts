import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UtilisateurComponent } from './utilisateur.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MarqueComponent } from '../utilisateur/marque/marque.component';
import { ComponentFixtureNoNgZone } from '@angular/core/testing';
import { ComparateurComponent } from './comparateur/comparateur.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { ModeleComponent } from './modele/modele.component';
import { VersionComponent } from './version/version.component';
import { Offre1Component } from './offres/offre1/offre1.component';
import { OffresComponent } from './offres/offres.component';
import { Offre2Component } from './offres/offre2/offre2.component';
import { Offre3Component } from './offres/offre3/offre3.component';
import { Offre4Component } from './offres/offre4/offre4.component';


const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    {
        path: '', component: UtilisateurComponent,
        children: [
            { path: '', redirectTo: 'accueil', pathMatch: 'full' },
            { path: 'accueil', component: AccueilComponent },
            { path: 'marq', component: MarqueComponent},
            { path: 'compt', component: ComparateurComponent },
            { path: 'promos', component: PromotionsComponent },
            { path: 'Acts', component: ActualiteComponent },
            { path: 'Modele', component: ModeleComponent },
            { path: 'version/:id', component: VersionComponent },
            { path: 'offres', component: OffresComponent },
            { path: 'offres/offre1', component: Offre1Component },
            { path: 'offres/offre2', component: Offre2Component },
            { path: 'offres/offre3', component: Offre3Component },
            { path: 'offres/offre4', component: Offre4Component },


           // { path: 'graph', loadChildren: () => import('./graph/graph.module').then(m => m.GraphModule)},  
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UtilisateurRoutingModule { }
