import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UtilisateurComponent } from './utilisateur.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MarqueComponent } from '../utilisateur/marque/marque.component';
import { ComponentFixtureNoNgZone } from '@angular/core/testing';
import { ComparateurComponent } from './comparateur/comparateur.component';
import { PromotionsComponent } from './promotions/promotions.component';


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


           // { path: 'graph', loadChildren: () => import('./graph/graph.module').then(m => m.GraphModule)},  
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UtilisateurRoutingModule { }
