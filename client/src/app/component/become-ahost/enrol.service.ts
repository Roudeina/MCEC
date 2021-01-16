import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HostRegister} from './host-register'

@Injectable({
  providedIn: 'root'
})
export class EnrolService {
_url='/become_a_host'
  constructor(private _http: HttpClient) { }
  enroll(host:HostRegister){
  return this._http.post<any>(this._url,host)
  }
}
