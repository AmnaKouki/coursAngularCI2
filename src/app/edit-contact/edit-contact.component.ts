import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contact } from '../shared/contact';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css'],
})
export class EditContactComponent implements OnInit {
  contact: Contact;

  constructor(
    private router: Router,
    private contactService: ContactService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((result) => {
      let id = result.get('id');
      if (id != '-1') {
        this.initContact(id);
      }
      else{
        this.contact = { id: null, name: '', email: '', website: '',projects: [],image: './images/default.png', featured: false, };
      }
    });

    
  }
  initContact(id) {
    this.contactService.getContactById(id).subscribe((contact: Contact) => {
      this.contact = contact;
    });
  }

  onContacts() {
    this.router.navigate(['/contacts']);
  }

  onAddContact(/*form: NgForm*/) {
    // let contact: Contact = {
    //   id: -1,
    //   name: form.value.name,
    //   email: form.value.email,
    //   website: form.value.website,
    //   projects: form.value.projects,
    //   image: './../../assets/images/default.png',
    //   featured: false,
    // };
    if(this.contact.id== null){
      //C'est un ajout
    this.contactService.addContact(this.contact).subscribe((contact) => {
      console.log('Successfully added new contact', contact);
      this.router.navigate(['/contacts/'+contact.id]);
    });
  }else{
    //C'est un update
    this.contactService.updateContact(this.contact).subscribe((contact) => {
      console.log('Successfully updated contact', contact);
      this.router.navigate(['/contacts/'+contact.id]);
    });
  }
}
}
