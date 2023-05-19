import {Component, Input, OnInit} from '@angular/core';
import {ProductoService} from "../producto.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {Producto} from "../producto";

@Component({
  selector: 'app-updateproducto',
  templateUrl: './updateproducto.component.html',
  styleUrls: ['./updateproducto.component.css']
})
export class UpdateproductoComponent implements OnInit {

  // @ts-ignore
  @Input() productoSelected: Producto;

  nombre: string = '';
  precio: string = '';
  tipo: string = '';

  constructor(private productoService: ProductoService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {

  }

  onUpdate(): void {
    this.productoService.update(this.productoSelected).subscribe(
      data => {
        this.showSuccess();
        this.back();
      },
      err => {
        this.showError(err.messageerror)
      }
    );
  }

  back(): void {
    this.router.navigate(['/admin/listproducto']);
  }

  showError(error: string) {
    this.toastr.error(error, "Acción de actualización")
  }

  showSuccess() {
    this.toastr.success(`El producto se actualizó`, "Acción de actualización");
  }
}
