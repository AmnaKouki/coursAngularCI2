import { Inject, Injectable } from '@angular/core';
import { Contact } from './shared/contact';
import { CONTACTS } from './shared/contacts';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contacts: Contact[] = CONTACTS;

  constructor(private httpClient: HttpClient, @Inject('baseUrl') public baseUrl:string) {}

  getContacts(): Observable<Contact[]> {
    // console.log(this.contacts);
    // return this.contacts
    return this.httpClient.get<Contact[]>(this.baseUrl+'contacts');
  }

  // ----> another way of doing it :
  //  getContacts():Contact[]{
  //       this.httpClient.get('http://localhost:3000/contacts').subscribe((data:Contact[])=>{
  //        this.contacts = data ;
  //    });
  //    return this.contacts;
  //    }


  getContactById(id: number): Observable<Contact> {
    return this.httpClient.get<Contact>(this.baseUrl+'contacts/'+id);
  }
  // Ou bien (statique)
  // getContactById(id: number): Contact {
  //   return this.contacts.find((contact) => contact.id == id);
  // }
  deleteContactById(id: number): Contact[] {
    let index = this.contacts.findIndex((contact) => contact.id == id);
    return this.contacts.splice(index, 1);
  }
  addContact(contact: Contact) : Observable<Contact> {
    // contact.id = this.contacts[this.contacts.length - 1].id + 1;
    // this.contacts.push(contact);

    const httpOption = {
      headers : new HttpHeaders({'Content-Type' : 'application/json'})
    }
   return this.httpClient.post<Contact>(this.baseUrl+'contacts',contact, httpOption);
  }
}
