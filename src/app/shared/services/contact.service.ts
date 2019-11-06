import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../models/contact.model';

@Injectable()
export class ContactService {
  url = 'http://localhost:3000/contact'
  constructor(private http: HttpClient) { }

  addContact(contact: Contact) {
    this.http.post(this.url, contact).subscribe();
  }
}
