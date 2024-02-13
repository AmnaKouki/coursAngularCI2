import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth:boolean = false;

  constructor() { }
  signIn():boolean{
    this.isAuth = true;
    return this.isAuth;
  }
  signOut():boolean{
    this.isAuth = false;
    return this.isAuth;
  }
}
