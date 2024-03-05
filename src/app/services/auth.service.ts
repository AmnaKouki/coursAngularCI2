import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth:boolean = false;
  authSubject = new Subject<boolean>();

  constructor() { }

  emmitAuthSubject(){
    this.authSubject.next(this.isAuth);
  }


  signIn():boolean{
    this.isAuth = true;
    console.log("Auth status: ", this.isAuth);

    this.emmitAuthSubject();
    return this.isAuth;
  }
  signOut():boolean{
    this.isAuth = false;
    console.log("Auth status: ", this.isAuth);
    
    this.emmitAuthSubject();
    return this.isAuth;
  }
}
