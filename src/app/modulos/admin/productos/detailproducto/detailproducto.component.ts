import { Component,Input, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UtilsService} from "../../../../services/utils.service";
import {Producto} from "../producto";

@Component({
  selector: 'app-detailproducto',
  templateUrl: './detailproducto.component.html',
  styleUrls: ['./detailproducto.component.css']
})
export class DetailproductoComponent implements OnInit {


  // @ts-ignore
  @Input() productoSelected: Producto;

  constructor(
    private router: Router
  ) { }
  ngOnInit(): void {

  }

  back(): void {
    this.router.navigate(['/admin/listproducto']);
  }

}
