/*********************************************************************************
* WEB422 – Assignment 5
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: _Tanishq Talreja Student ID: 126460203 Date: 08-16-22
*
99912bf876dc4350b5fdbb7938521e7e
Client Secret cd91852814764c32963955d49730203b
********************************************************************************/ 
import { Component, OnInit } from '@angular/core';
import RegisterUser from '../RegisterUser';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUser: RegisterUser={userName: "", password: "", password2: ""};
  warning: string = "";
  success: boolean = false;
  loading: boolean = false;

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    
    if(this.registerUser.userName == ''){
      this.warning = "ENTER USERNAME AGAINN";
    }else if(this.registerUser.password != this.registerUser.password2){
      this.warning = "BUDDY WAKE UP!!!!";
    }else if(this.registerUser.password == '' || this.registerUser.password2 == ''){
      this.warning = "I AM HUNGRY FOR PASSWORD AND PASSWORD";
    }else if (this.registerUser.userName != '' && this.registerUser.password == this.registerUser.password2){

      this.loading = true;
      this.auth.register(this.registerUser).subscribe( () => {
        this.success = true;
        this.warning = '';
        this.loading = false;
      }, (err) => {
        this.success = false;
        this.warning = err.error.message;
        this.loading = false;

      })
    }

  }

}