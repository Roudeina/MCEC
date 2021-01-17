import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HostRegister} from './host-register'
import {EnrolService} from './enrol.service'

@Component({
  selector: 'app-become-ahost',
  templateUrl: './become-ahost.component.html',
  styleUrls: ['./become-ahost.component.css']
})
export class BecomeAhostComponent {
  selectedFile= File=null;
  fd=new FormData();
  hostModel= new HostRegister("",false,this.selectedFile)



  constructor(private _enrolService:EnrolService){}
  onFileSelected(event){
    this.selectedFile=<File>event.target.files[0];
    console.log('selectedFile',this.selectedFile)
  }

  onSubmit(){
    console.log('data to be sent',this.hostModel)
    this._enrolService.enroll(this.hostModel)
    .subscribe(
      data =>console.log('success',data),
      err => console.log('error!',err)
    )
  }
  }
