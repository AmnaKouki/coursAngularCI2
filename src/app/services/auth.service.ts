import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth:boolean = false;

  constructor() { }
  signIn():boolean{
    this.isAuth = true;
    console.log("Auth status: ", this.isAuth);
    
    return this.isAuth;
  }
  signOut():boolean{
    this.isAuth = false;
    console.log("Auth status: ", this.isAuth);
    
    return this.isAuth;
  }
}
