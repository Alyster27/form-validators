import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  constructor() { }
  registerForm: any; // form Name

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      "firstName": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "lastName": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "emailId": new FormControl(null, [Validators.required, Validators.email]),
      "mobileNumber": new FormControl(null, [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(12), Validators.maxLength(12)]),
    });
  }

  // submit function
  submitData() {
    console.log(this.registerForm.value);
  }

  // firstName
  get firstname() {
    return this.registerForm.get('firstName');
  }

  // lastName
  get lastname() {
    return this.registerForm.get('lastName');
  }

  // emailId
  get emailid() {
    return this.registerForm.get('emailId');
  }

  // mobileNumber
  get mobile() {
    return this.registerForm.get('mobileNumber');
  }
}
