import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";
import {ActivatedRoute, Router} from "@angular/router";
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-productoheader',
  templateUrl: './productoheader.component.html',
  styleUrls: ['./productoheader.component.css']
})
export class ProductoheaderComponent implements OnInit {
  isLogged ?: boolean;
  isAdmin ?: boolean;
  username ?: string;
  // @ts-ignore
  items: MenuItem[];
  constructor(private routerPath: Router,
              private router: ActivatedRoute,
              private loginService: LoginService) { }

  ngOnInit(): void {
    this.username = this.loginService.getUsername();
    this.items = [
      {
        label: 'Operaciones',
        items: [

          {label: 'Productos',
            items: [
              {label: 'Listar', routerLink: "/admin/listproducto"},
              {label: 'Crear', routerLink: "/admin/createproducto"}
            ]},
        ]
      }
    ];
  }
  back(): void {
    this.routerPath.navigate(['principal'])
  }


}
