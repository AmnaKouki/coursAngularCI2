import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contact } from '../shared/contact';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css'],
})
export class EditContactComponent implements OnInit {
  constructor(private router: Router, private contactService: ContactService) {}
  ngOnInit(): void {}
  onContacts() {
    this.router.navigate(['/contacts']);
  }

  onAddContact(form: NgForm) {
    let contact: Contact = {
      id: -1,
      name: form.value.name,
      email: form.value.email,
      website: form.value.website,
      projects: form.value.projects,
      image: './../../assets/images/default.png',
      featured: false,
    };
    this.contactService.addContact(contact);
    this.router.navigate(['/contacts']);
  }
}
