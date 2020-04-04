import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(public authservice: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authservice.login(this.model).subscribe(next => {
      this.alertify.success('Logged in succesfully');
    }, error => {
      this.alertify.error(error);
    },
    () => {
      this.router.navigate(['/members']);
    });
  }

  loggedIn() {
    return this.authservice.loggedIn();
    // const token = localStorage.getItem('token');
    // !! returns true or false. If token exist, it returns true, otherwise returns false
    // return !!token;
  }

  logout(){
    localStorage.removeItem('token');
    this.alertify.message('Logged out');
    this.router.navigate(['/home']);
  }

}
