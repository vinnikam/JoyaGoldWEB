import { Component, OnInit } from '@angular/core';
import {Producto} from "../producto";
import {ProductoService} from "../producto.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "../../../../services/login.service";
import {ToastrService} from "ngx-toastr";
import {Tipoproducto} from "../tipoproducto";
import {Material} from "../material";

@Component({
  selector: 'app-createproducto',
  templateUrl: './createproducto.component.html',
  styleUrls: ['./createproducto.component.css']
})
export class CreateproductoComponent implements OnInit {

  producto ?: Producto;
  nombre : string = '';
  precio : string = '';
  aplicadescuento : string = '';
  valordescuento : Date = new Date();

  constructor(    private productoService: ProductoService,
                  private activatedRoute: ActivatedRoute,
                  private router: Router,
                  private loginService: LoginService,
                  private toastr: ToastrService) { }

  ngOnInit(): void {
    this.nombre = '';
  }
  onCreate(): void {
    //codigo: number, nombre: string, tipo: Tipoproducto, material: Material, precio: number, valordescuento: number, aplicadescuento: boolean
    var tipo = new Tipoproducto(0, '');
    var material = new Material(0,'');
    var aplica = true;

    this.producto = new Producto(0, this.nombre, tipo,material, 1000, 0.8, aplica);
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



}
