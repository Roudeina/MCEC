import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HostRegister} from './host-register';
import { TokenStorageService } from '../../_services/token-storage.service';



@Component({
  selector: 'app-become-ahost',
  templateUrl: './become-ahost.component.html',
  styleUrls: ['./become-ahost.component.css']
})
export class BecomeAhostComponent  {

  url='https://i.pinimg.com/originals/40/ab/5f/40ab5f105e0702ad3a247a88d971b930.png';
  show=true;
  currentUser: any;
  hostModel= new HostRegister("","",this.url,"host")









  

  selectFile(event){
    if (event.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event : any) => {
        this.url = event.target.result
        this.hostModel.image = event.target.result
      }
    }
  }

  constructor(private _http: HttpClient, private token: TokenStorageService){}
  ngOnInit(): void {
    this.currentUser=this.token.getUser()
  }

  onSubmit(){
    this._http.post<any>('https://mcec-server2.herokuapp.com/become_a_host',this.hostModel)
    .subscribe(
      data =>console.log('success'),
      err => console.log('error!',err)
    )
    this.token.getUser().guest_or_host = "host"
    this.show=false
  }
  }