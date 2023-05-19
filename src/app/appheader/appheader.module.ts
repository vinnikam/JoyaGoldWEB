import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {MenubarModule} from "primeng/menubar";
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MenubarModule
  ],
  exports: [
    HeaderComponent
  ],
})
export class AppheaderModule { }
