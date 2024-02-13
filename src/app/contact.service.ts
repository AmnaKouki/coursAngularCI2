import { Injectable } from '@angular/core';
import { Contact } from './shared/contact';
import { CONTACTS } from './shared/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Contact[]=CONTACTS;


  constructor() { }
  getContacts():Contact[]{
   // console.log(this.contacts);
    
    return this.contacts
  }
  getContactById(id:number):Contact{
    return this.contacts.find( contact => contact.id == id);
  }
  deleteContactById(id:number):Contact[]{
 let index = this.contacts.findIndex((contact)=>contact.id == id);
 return this.contacts.splice(index,1);

  }
  addContact(contact:Contact) : void{
    contact.id = this.contacts.length + 1;
    this.contacts.push(contact);
  }


}
