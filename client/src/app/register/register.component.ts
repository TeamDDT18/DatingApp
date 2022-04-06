import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  @Output() resetRegister = new EventEmitter();
  model: any = {};
  baseUrl = 'https://localhost:5001/api/';

  constructor(private accountService: AccountService, public router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  register()
  {
    this.accountService.register(this.model).subscribe(response =>
      {
        console.log(response);
        this.reset();
      }, error =>{
        console.log(error);
      })
    }

  reset(){
      this.resetRegister.emit(false)
    }
  }
