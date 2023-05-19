import { Component, OnInit } from '@angular/core';
import {ProductoService} from "../producto.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {Producto} from "../producto";
import {Tipoproducto} from "../tipoproducto";
import {Material} from "../material";

@Component({
  selector: 'app-listproducto',
  templateUrl: './listproducto.component.html',
  styleUrls: ['./listproducto.component.css']
})
export class ListproductoComponent implements OnInit {

  // @ts-ignore
  productos: Producto[]
  // @ts-ignore
  productoSelected: Producto
  indexSelected: number = 0

  loading: boolean = true;

  constructor(private productoService: ProductoService, private toastr: ToastrService, private router: Router) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.getproductos();
    this.productoSelected = new Producto(0,"",
      new Material(0,''),
      new Tipoproducto(0,''),0,0.8,true)
  }
  getproductos(): void{
    this.loading = true;
    this.productoService.list().subscribe(
      data => {
        this.productos = data;
        this.onSelect(this.productos[0], 0)
        this.loading = false;
      },
      err => {
        //console.log(err)
        //this.showError(err.code);
        this.loading = false;

      }
    )
  }
  edit(id: number): void {
    //this.routerPath.navigate([`/admin/updatedomain/${id}`])
    this.router.navigate([`admin/updateproducto/${id}`])
  }
  view(dato: Producto): void {
    //this.routerPath.navigate([`/admin/detaildomain/${id}`])
    //this.router.navigate([`admin/detaildomain/${id}`])
    this.productoSelected = dato;
  }
  view1(id: number): void {
    //this.routerPath.navigate([`/admin/detaildomain/${id}`])
    this.router.navigate([`admin/detailproducto/${id}`])
  }
  onDelete(id: number): void {
    this.productoService.delete(id).subscribe(
      data => {
        this.getproductos();
        this.showSuccess();
      },
      err => {
        //console.log(err)
        this.showError(err.messageerror);
      }

    );
  }
  onSelect(data: Producto, index: number){
    this.indexSelected = index
    this.productoSelected = data
  }
  showError(error: string){
    this.toastr.error(error , "Acción de borrado")
  }

  showSuccess() {
    this.toastr.success(`El producto se borró exitosamente.`, "Acción de borrado");
  }

}
