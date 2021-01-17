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
        //console.log("azert",this.url)
        this.hostModel.image = event.target.result

        //console.log(this.hostModel.image)
      }
    }
    //console.log("qsdfghj",reader.onload(event))
  }

  constructor(private _http: HttpClient, private token: TokenStorageService){}
  ngOnInit(): void {
    this.currentUser=this.token.getUser()
  }

  onSubmit(){
    console.log('data to be sent',this.hostModel)
    this._http.post<any>('http://localhost:8080/become_a_host',this.hostModel)
    .subscribe(
      data =>console.log('success',data),
      err => console.log('error!',err)
    )
    this.token.getUser().guest_or_host = "host"
    console.log('qsdfghjk',this.currentUser.guest_or_host)
    this.show=false
  }
  }