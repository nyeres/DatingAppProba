import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';


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

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register(){
      this.authService.register(this.model).subscribe(() => {
        console.log('Registration should be done');
      }, error => {
        console.log(error);
      });
    //console.log(this.model);
  }

  cancel(){
    this.cancelRegister.emit(false);
    console.log('Cancelled reg');
  }

}
