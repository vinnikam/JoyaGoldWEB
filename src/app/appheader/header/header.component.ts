import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private routerPath: Router,
    private router: ActivatedRoute,
    private loginService: LoginService
  ) { }
  isLogged ?: boolean;
  isAdmin ?: boolean;
  username ?: string;

  ngOnInit(): void {
    this.isLogged = this.loginService.isLoggedIn
    this.isAdmin = this.loginService.getIsAdmin();
    this.username = this.loginService.getUsername();
  }
  goTo(menu: string){

    if(menu === "logout"){
      this.loginService.logout();
    }

  }
  public logout(): void {

    this.loginService.logout();
    this.routerPath.navigate(['']);

  }

}
