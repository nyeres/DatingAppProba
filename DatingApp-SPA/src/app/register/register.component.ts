import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //getting data from Home
  //@Input() valuesFromHome: any;

  //comunication child to parents
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  register(){
      this.authService.register(this.model).subscribe(() => {
        this.alertify.success('Registration should be done');
      }, error => {
        this.alertify.error(error);
      });
    //console.log(this.model);
  }

  cancel(){
    this.cancelRegister.emit(false);
    this.alertify.message('Cancelled reg');
  }

}
