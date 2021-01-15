import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-material-file-upload',
  templateUrl: './material-file-upload.component.html',
  styleUrls: ['./material-file-upload.component.css']
})
export class MaterialFileUploadComponent  {
selectedFile= File=null;
constructor(private http:HttpClient){}
onFileSelected(event){
  this.selectedFile=<File>event.target.files[0];
}
onUpload(event){
  const fd=new FormData();
  fd.append('image',this.selectedFile,this.selectedFile.name)
  this.http.post('/become_a_host',fd )
  .subscribe(res=>{
    console.log(res);
  })
}
}
