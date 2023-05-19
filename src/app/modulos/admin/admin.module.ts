import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminRoutingModule} from "./admin-routing-module";
import {FormsModule} from "@angular/forms";
import {MenubarModule} from "primeng/menubar";
import {TableModule} from "primeng/table";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import { CreateproductoComponent } from './productos/createproducto/createproducto.component';
import { DetailproductoComponent } from './productos/detailproducto/detailproducto.component';
import { ListproductoComponent } from './productos/listproducto/listproducto.component';
import { InfoproductoComponent } from './productos/infoproducto/infoproducto.component';
import { ProductoheaderComponent } from './productos/productoheader/productoheader.component';
import {UpdateproductoComponent} from "./productos/updateproducto/updateproducto.component";


@NgModule({
  declarations: [
    CreateproductoComponent,
    DetailproductoComponent,
    ListproductoComponent,
    UpdateproductoComponent,
    InfoproductoComponent,
    ProductoheaderComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MenubarModule,
    TableModule,
    ProgressSpinnerModule
  ],
  exports:[
    CreateproductoComponent,
    DetailproductoComponent,
    ListproductoComponent,
    UpdateproductoComponent,
    InfoproductoComponent
  ]
})
export class AdminModule { }
