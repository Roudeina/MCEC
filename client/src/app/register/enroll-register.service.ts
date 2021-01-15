import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserRegister } from './user-register';

@Injectable({
  providedIn: 'root'
})
export class EnrollRegisterService {

  _url = 'http://localhost:8080/api/auth/signup';;
  constructor(private _http : HttpClient) { }

  enroll (user: UserRegister){
    return this._http.post<any>(this._url, user)
  }
}
