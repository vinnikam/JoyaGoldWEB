import {Tipoproducto} from "./tipoproducto";
import {Material} from "./material";

export class Producto {
  codigo: number;
  nombre: string;
  tipo: Tipoproducto;
  material: Material;
  precio: number;
  valordescuento: number;
  aplicadescuento: boolean;


  constructor(codigo: number, nombre: string, tipo: Tipoproducto, material: Material, precio: number, valordescuento: number, aplicadescuento: boolean) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.tipo = tipo;
    this.material = material;
    this.precio = precio;
    this.valordescuento = valordescuento;
    this.aplicadescuento = aplicadescuento;
  }
}
