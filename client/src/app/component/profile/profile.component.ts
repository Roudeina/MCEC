import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../_services/token-storage.service';
import { HttpClient } from '@angular/common/http';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  notEdit = true;
  toSubmit = false;
  photo : string;
  currentUser: any;

  url : string;
  url2: string;
  imgChange = false;
  imgChange2 = false;

  constructor(private token: TokenStorageService, private http: HttpClient) { }
  isHost = false;
  show=false
  ngOnInit(): void {
    this.currentUser = this.token.getUser()
    console.log(this.currentUser);
    this.url = this.currentUser.profile_picture;
    this.url2 = this.currentUser.room_picture;
  }

  clickEdit(){
     this.notEdit = !this.notEdit
     this.toSubmit = true
  }

  changeImg(){
    this.imgChange = true;
  }

  changeImg2(){
    this.imgChange2 = true;
  }

  selectFile(event){
    if (event.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event : any) => {
        this.url = event.target.result
      }
    }
  }

  verifyHost(){
    if (this.currentUser.guest_or_host === "host"){
      this.isHost =true
    }
    return this.isHost
  }

  selectFile2(event){
    if (event.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event : any) => {
        this.url2 = event.target.result
      }
    }
  }


  onSubmit(): void {
    console.log("DATA Updated",this.currentUser)

    this.http.post<any>('http://localhost:8080/edit_profile', '{"contact":"fbbbbbb"}')

    .subscribe(
      data =>console.log('success',data),
      err => console.log('error!',err)
    )
    this.show=true
    console.log('azerty',this.show)
  }

}