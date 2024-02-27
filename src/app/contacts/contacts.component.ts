import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contact } from '../shared/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  contacts : Contact[];
  constructor(private router : Router, private contactService : ContactService){}

  ngOnInit(){
    this.contacts = this.contactService.getContacts();
  }
  onDelete(id : number){
    this.contactService.deleteContactById(id);
  }
  onAbout(){
    this.router.navigate(['/about']);
  }
  onAddContact(){
    this.router.navigate(['/contacts/edit']);
  }
  onAddContactReactiveForm(){
    this.router.navigate(['/contacts/edit-reactive-form']);
  }

}
