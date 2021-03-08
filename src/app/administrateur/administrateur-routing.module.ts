import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdministrateurComponent } from './administrateur.component';
import { MenuComponent } from './menu/menu.component';
import { CarburantComponent } from './carburant/carburant.component';
import { TransmissionComponent } from './transmission/transmission.component';
import { PaysComponent } from './pays/pays.component';
import { CarrousserieComponent } from './carrousserie/carrousserie.component';
import { VersionComponent } from './version/version.component';
import { ModeleComponent } from './modele/modele.component';
import { MarqueComponent } from './marque/marque.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { ImageVersionComponent } from './image-version/image-version.component';

const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    {
        path: '', component: AdministrateurComponent,
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: MenuComponent },
            { path: 'carburant', component: CarburantComponent },
            { path: 'transmission', component: TransmissionComponent },
            { path: 'carousserie', component: CarrousserieComponent },
            { path: 'pays', component: PaysComponent },
            { path: 'marque', component: MarqueComponent },
            { path: 'modele', component: ModeleComponent },
            { path: 'version', component: VersionComponent },
            { path: 'annonce', component: AnnonceComponent },
            { path: 'vim', component: ImageVersionComponent },

           // { path: 'graph', loadChildren: () => import('./graph/graph.module').then(m => m.GraphModule)},  
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdministrateurRoutingModule { }
