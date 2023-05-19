import { Injectable } from '@angular/core';
import {DatePipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private datapipe: DatePipe) { }

  /**
   * Operacion para formatear la salida de la fecha que le resta 1 dia.
   * @param fecha
   */
  public convertDate(date :Date):string {
    if (date === undefined){
      return "";
    }
    //console.log(fecha)
    // @ts-ignore
    const date_  = new Date(date.toString().substring(0, date.toString().length - 1));

    return <string>this.datapipe.transform(date_, 'dd/MM/yyyy');
  }
}
