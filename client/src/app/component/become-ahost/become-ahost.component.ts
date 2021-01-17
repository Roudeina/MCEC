import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HostRegister} from './host-register'



@Component({
  selector: 'app-become-ahost',
  templateUrl: './become-ahost.component.html',
  styleUrls: ['./become-ahost.component.css']
})
export class BecomeAhostComponent {
  url='';

  hostModel= new HostRegister("","",this.url)

  selectFile2(event){
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
//  openFile = function(event) {
//     var input = event.target;
//     var url=this.url

//     var reader = new FileReader();
//     reader.onload = function(){
//       var dataURL = reader.result;
//       url= dataURL;
//     };
//     console.log('ccccccc',url)
//     reader.readAsDataURL(input.files[0]);
//   };

//   onFileSelected(event){
//     this.selectedFile=<File>event.target;
//     console.log('selectedFile',this.selectedFile)
//   }

  constructor(private _http: HttpClient){}
  onSubmit(){
    console.log('data to be sent',this.hostModel)
    this._http.post<any>('http://localhost:8080/become_a_host',this.hostModel)
    .subscribe(
      data =>console.log('success',data),
      err => console.log('error!',err)
    )
  }
  }