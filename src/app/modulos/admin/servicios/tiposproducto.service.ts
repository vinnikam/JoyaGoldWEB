import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {TipoProducto} from "../productos/tipoproducto";


@Injectable({
  providedIn: 'root'
})
export class TiposProductoService {


  urlRest: string = environment.urlTipoProducto

  httpOptions = { headers: new HttpHeaders({'Content-Type' : 'application/json'})};

  constructor(private httpClient: HttpClient) { }

  public getList(): Observable<TipoProducto[]> {
    return this.httpClient.get<TipoProducto[]>(this.urlRest+'', this.httpOptions);
  }
  public getDetail(id: number): Observable<TipoProducto> {
    return this.httpClient.get<TipoProducto>(this.urlRest +'/'+ `${id}`, this.httpOptions);
  }
}
