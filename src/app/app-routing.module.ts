import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrincipalComponent} from "./principal/principal.component";
import {InfoproductoComponent} from "./modulos/admin/productos/infoproducto/infoproducto.component";


const routes:  Routes = [
  {path: '', component: PrincipalComponent, pathMatch: 'full'},
  {path: 'principal', component: PrincipalComponent},
  {path: 'admin', component: InfoproductoComponent}

  //{path: '**', redirectTo: '', pathMatch: 'full'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ relativeLinkResolution: 'legacy' }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
