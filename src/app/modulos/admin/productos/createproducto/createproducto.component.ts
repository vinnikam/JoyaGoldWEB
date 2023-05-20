import { Component, OnInit } from '@angular/core';
import {Producto} from "../producto";
import {ProductoService} from "../producto.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "../../../../services/login.service";
import {ToastrService} from "ngx-toastr";
import {TipoProducto} from "../tipoproducto";
import {Material} from "../material";
import {MaterialesService} from "../../servicios/materiales.service";
import {TiposProductoService} from "../../servicios/tiposproducto.service";
import * as Console from "console";

@Component({
  selector: 'app-createproducto',
  templateUrl: './createproducto.component.html',
  styleUrls: ['./createproducto.component.css']
})
export class CreateproductoComponent implements OnInit {

  producto ?: Producto;
  elnombre : string = '';
  precio = 0 ;
  aplicadescuento = 0;
  valordescuento = 0;
  materialesList :any ;
  tipoProductoList:any;
  materialSelect= 0
  tipoProductoSelect= 0

  constructor(    private productoService: ProductoService,
                  private activatedRoute: ActivatedRoute,
                  private router: Router,
                  private loginService: LoginService,
                  private toastr: ToastrService,
                  private materialService: MaterialesService,
                  private tipoProductoService:TiposProductoService
) { }

  ngOnInit(): void {
    this.getMateriales();
    this.getTipoProductos();
  }
  onCreate(): void {
    //codigo: number, nombre: string, tipo: Tipoproducto, material: Material, precio: number, valordescuento: number, aplicadescuento: boolean
    var tipo = new TipoProducto(this.tipoProductoSelect, '');
    var material = new Material(this.materialSelect,'');


    this.producto = new Producto(0, this.elnombre, tipo,material, this.precio,
      this.aplicadescuento == 1 ? this.valordescuento:0 ,
      this.aplicadescuento == 1 ? true:false);
    this.productoService.create(this.producto).subscribe(
      data => {
        //console.log(data);
        this.showSuccess();
        this.back();
      },
      err => {
        //alert(err.error.detail)
        this.showError(err.error.exception+": "+ err.error.detail);
      }
    );
  }

  back(): void {
    this.router.navigate(['/admin/listproducto']);
  }
  showError(error: string){
    this.toastr.error(error ,"Creación error")
  }

  showSuccess() {
    this.toastr.success(`El producto fue creado`, "Información");
  }

  getMateriales(): void{
    this.materialService.getList().subscribe(
      data => {
        this.materialesList = data;
      },
      err => {
        //console.log(err)
        //this.showError(err.code);
      }
    )
  }
  getTipoProductos(): void{
    this.tipoProductoService.getList().subscribe(
      data => {
        this.tipoProductoList = data;
      },
      err => {
        //console.log(err)
        //this.showError(err.code);

      }
    )
  }

}
