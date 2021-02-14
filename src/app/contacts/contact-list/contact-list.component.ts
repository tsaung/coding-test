import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactsService } from '../contacts.service';

@Component({
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactList implements OnInit {
  columns: string[] = [
    'first_name',
    'last_name',
    'email',
    'phone',
    'company',
    'address',
  ];
  contacts: Contact[];
  constructor(private contactService: ContactsService) {}
  ngOnInit() {
    this.contactService.getContacts().subscribe((res) => {
      this.contacts = res.contacts;
    });
  }
}
