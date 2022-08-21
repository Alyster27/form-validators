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
      "mobileNumber": new FormControl(null, [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)]),
    });
  }

  // submit function
  submitData() {
    console.log(this.registerForm.value);

    if (this.registerForm.valid) {
      alert(`Thank you ${this.registerForm.value.firstName} for registering`);
      this.registerForm.reset();
    }
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
