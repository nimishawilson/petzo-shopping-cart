import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor() { 
    
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      name : new FormControl('',[
        Validators.required
      ]),
      phonenumber : new FormControl('',[
        Validators.required
      ]),
      email : new FormControl('',[
        Validators.required,
        Validators.email
        ]),
      password : new FormControl('',[
        Validators.minLength(8),
        Validators.maxLength(30),
        Validators.required,
      ]),
      confirmpassword : new FormControl('',[
        Validators.minLength(8),
        Validators.maxLength(30),
        Validators.required,
      ]),
    });
  }

  onSubmit(){
     if(this.registerForm.invalid)
     {
       alert("invalid form");
     } else {
    console.log(this.registerForm)
     }
    
  }

  getCursor(){
    if(this.registerForm.invalid){
      return "not-allowed";
    } else {
      return "pointer";
    }
  }


}
