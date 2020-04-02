import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  constructor(private http: HttpClient) { }
  //values: any;

  ngOnInit() {
    //this.getValues();
  }

  registerToogle(){
    this.registerMode = true;
  }

  //getValues(){
  //  this.http.get('http://localhost:5000/api/values').subscribe(response => {
  //    this.values = response;
  //  },
  //  error => {
  //    console.log(error);
  //  });
  //}

  cancelRegisterMode(valamiAmitMegkaptunkAChildtol: boolean) {
    this.registerMode = valamiAmitMegkaptunkAChildtol;
  }

}
