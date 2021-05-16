import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://mcec-server2.herokuapp.com/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(email: string,password: string,username: string,gender: string,age: number,
  nationality : string,contact: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      email,
      password,
      username,
      gender,
      age,
      nationality,
      contact,
    }, httpOptions);
  }
}