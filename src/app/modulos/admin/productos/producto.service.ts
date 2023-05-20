import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Producto} from "./producto";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {


  urlRest: string = environment.urlProducto;

  httpOptions = { headers: new HttpHeaders({'Content-Type' : 'application/json'})};

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(this.urlRest+'', this.httpOptions);
  }
  public detail(id: number): Observable<Producto> {
    return this.httpClient.get<Producto>(this.urlRest +'/'+ `${id}`, this.httpOptions);
  }

  public create(entidad: Producto): Observable<any> {
    return this.httpClient.post<any>(this.urlRest+"" , entidad, this.httpOptions);
  }

  public update(entidad ?: Producto): Observable<any> {
    return this.httpClient.put<any>(this.urlRest+"" , entidad, this.httpOptions);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.urlRest+ `${id}`, this.httpOptions);
  }

}
