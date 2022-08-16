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
import User from '../User';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = { userName: '', password: '', _id: '' };
  warning: string = '';
  loading: boolean = false;

  constructor(private auth : AuthService, private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit() {

    if (this.user.userName == '') {
      this.warning = "DONT SNEAK IN!!!";
    }else if (this.user.password == ''){
      this.warning = "PASSWORD IN IS WRONG!!!!";
    }else if (this.user.userName != '' && this.user.password != ''){

      this.loading = true;
      this.auth.login(this.user).subscribe( success => {
        this.loading = false;
        localStorage.setItem('access_token', success.token);
        this.router.navigate(['/newReleases']);
      }, (err) => {
        this.warning = err.error.message;
        this.loading = false;
      })
    }

  }

}