import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactList implements OnInit {
  constructor(private contactService: ContactsService) {}
  ngOnInit() {
    this.contactService.getContacts().subscribe((res) => {
      console.log(res);
    });
  }
}
