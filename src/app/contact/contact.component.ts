import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '../shared/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contactForm: FormGroup;

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.initForm();
  }

  ngOnInit() {
  }

  initForm () {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required ],
      phoneNumber: ['', Validators.required],
      shouldAddToNewsletter: true
    })
  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('name'); }
  get phoneNumber() { return this.contactForm.get('name'); }

  createContact() {
    this.contactService.addContact(this.contactForm.value);
  }

}
