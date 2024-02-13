import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
  isAuth:boolean = false;
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    this.isAuth = this.authService.isAuth;
  }
onSignIn(){
  this.isAuth = this.authService.signIn();
}
onSignOut(){
  this.isAuth = this.authService.signOut();
}

}
