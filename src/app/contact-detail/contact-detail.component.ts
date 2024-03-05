import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contact } from '../shared/contact';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css'],
})
export class ContactDetailComponent implements OnInit {
  idContact: any;
  contact: Contact;
  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((res) => {
      this.idContact = res.get('id');
      console.log(this.idContact);
    });

    this.contactService
      .getContactById(this.idContact)
      .subscribe((data: Contact) => {
        this.contact = data;
      });
      console.log(this.contact);
  }
  onContacts() {
    this.router.navigate(['/contacts']);
  }
}
