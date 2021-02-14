import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ContactsService {
  constructor(private http: HttpClient) {}

  getContacts() {
    return this.http.get('./assets/data.json');
  }
}
