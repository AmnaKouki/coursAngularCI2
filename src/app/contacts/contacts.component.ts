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
  contact: Contact;
  idContact : number;
  constructor(private router : Router, private contactService : ContactService){}

  ngOnInit(){
   // this.contacts = this.contactService.getContacts();
    this.contactService.getContacts().subscribe((data:Contact[])=>{
      this.contacts = data;
    });

  // this.contactService.getContactById(this.idContact).subscribe((data:Contact)=>{
  //     this.contact = data;
  //   });
  }



  onDelete(id : number){
    //this.contactService.deleteContactById(id);
    this.contactService.deleteContactById(id).subscribe((data:Contact)=> {
      console.log("contact deleted");
      let index = this.contacts.findIndex((contact) => contact.id == id);
      return this.contacts.splice(index, 1);
      
  
  });
  }
  onAbout(){
    this.router.navigate(['/about']);
  }
  onAddContact(){
    this.router.navigate(['/contacts/edit/-1']);
  }
  onAddContactReactiveForm(){
    this.router.navigate(['/contacts/edit-reactive-form']);
  }

}
