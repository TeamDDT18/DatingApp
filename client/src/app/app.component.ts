<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';
=======
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
>>>>>>> 9a053b2758aaaaaf4c1b200d067a5f0f90bcf841

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
<<<<<<< HEAD
  title = 'client';
  users: any;
  changeOP : false;

  constructor(private accountService: AccountService){}

  ngOnInit() {
    this.setCurrentUser();
  }
  
  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user'));  
    this.accountService.setCurrentUser(user);
  }
  
=======
  title = 'The Dating app';
  users: any;
  constructor(private http: HttpClient){}

  ngOnInit() {
    this.http.get('https://localhost:5001/api/users').subscribe(response => {
      this.users = response;
    }, error =>{
      console.log(error);
    })
    
  }
>>>>>>> 9a053b2758aaaaaf4c1b200d067a5f0f90bcf841
}
