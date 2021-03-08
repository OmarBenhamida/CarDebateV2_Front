import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthentificationComponent } from './authentification.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    {
        path: '', component: AuthentificationComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
           { path: 'login', component: LoginComponent },
           // { path: 'graph', loadChildren: () => import('./graph/graph.module').then(m => m.GraphModule)},  
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthentificationRoutingModule { }
