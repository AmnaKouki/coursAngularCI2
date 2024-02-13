import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit{
  constructor(private router: Router) { }
  ngOnInit(): void {
      
  }
  onContacts(){
    this.router.navigate(['/contacts']);
  }

}
