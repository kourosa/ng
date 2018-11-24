import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup ,FormArray, Validator, Validators} from '@angular/forms';
import { defineBase } from '@angular/core/src/render3';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  LoginForm : FormGroup;

  myForm: FormGroup;
  myForm2: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.LoginForm = this.fb.group({
      user: ['',[Validators.minLength(6),Validators.required]],
      pass: ['',[Validators.minLength(6),Validators.required]]
    });

    this.myForm = this.fb.group({
      email: ['',[Validators.email, Validators.required]],
      phones: this.fb.array([])
    });

  }

  get phoneForms() {
    return this.myForm.get('phones') as FormArray
  }

  addPhone() {

    const phone = this.fb.group({ 
      area: [[], [Validators.minLength(6),Validators.required]],
      prefix: [],
      line: [],
    })

    this.phoneForms.push(phone);
  }

  
  deletePhone(i) {
    this.phoneForms.removeAt(i)
  }

  getemail() { return this.myForm.get('email');}

  resetform(){console.log("reset clicked")}

  adduserdefineBase(){}

}