import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserLogin } from './user-login';

@Injectable({
  providedIn: 'root'
})
export class EnrollLoginService {

  _url = 'http://localhost:8080/api/auth/signin';;
  constructor(private _http : HttpClient) { }

  enroll (user: UserLogin){
    return this._http.post<any>(this._url, user)
  }
}
