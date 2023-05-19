import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class LoginService {

    public isLoggedIn = false;

  constructor(    ) { }

  public async ngOnInit() {

  }

  public isLogged():boolean{
    return true;
  }
  public getUsername(): string  {
   return "Elusurio";
  }


  public getIsAdmin(): boolean {
  return true;
  }

    public login() {
      ;
    }

    public logout() {
      ;

    }

}
