import {TipoProducto} from "./tipoproducto";
import {Material} from "./material";

export class Producto {
  codigo: number;
  nombre: string;
  tipo: TipoProducto;
  material: Material;
  precio: number;
  descuento: number;
  aplicaDescuento: boolean;


  constructor(codigo: number, nombre: string, tipo: TipoProducto, material: Material, precio: number,
              valordescuento: number, aplicadescuento: boolean) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.tipo = tipo;
    this.material = material;
    this.precio = precio;
    this.descuento = valordescuento;
    this.aplicaDescuento = aplicadescuento;

  }
}
