import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

import {Material} from "../productos/material";

@Injectable({
  providedIn: 'root'
})
export class MaterialesService {

  urlRest: string = environment.urlMateriales;

  httpOptions = { headers: new HttpHeaders({'Content-Type' : 'application/json'})};

  constructor(private httpClient: HttpClient) { }

  public getList(): Observable<Material[]> {
    return this.httpClient.get<Material[]>(this.urlRest+'', this.httpOptions);
  }
  public getDetail(id: number): Observable<Material> {
    return this.httpClient.get<Material>(this.urlRest +'/'+ `${id}`, this.httpOptions);
  }


}
