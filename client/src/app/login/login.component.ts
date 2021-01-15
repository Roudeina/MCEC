import { EnrollLoginService } from './enroll-login.service';
import { Component, OnInit } from '@angular/core';
import { UserLogin } from './user-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  userLoginModel= new UserLogin('', '')

  constructor(private _enrollLoginService : EnrollLoginService){

  }

  onSubmit(){
    console.log(this.userLoginModel)
    this._enrollLoginService.enroll(this.userLoginModel)
    .subscribe(
      data => console.log( "success" , data),
      error => console.log ("error" , error)
    )
  }
}
