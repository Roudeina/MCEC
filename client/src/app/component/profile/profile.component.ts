import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../_services/token-storage.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  notEdit = true;
  toSubmit = false;
  photo: string;

  url: string;
  url2: string;
  imgChange = false;
  imgChange2 = false;

  constructor(private token: TokenStorageService, private http: HttpClient) {}
  isHost = false;
  show = false;
  currentUserToken = this.token.getUser();
  currentUserId ;
  currentUser;
  favorites;

  
  ngOnInit(): void {
    this.getInfos()
    this.url = this.currentUser.profile_picture;
    this.url2 = this.currentUser.room_picture;
  }


  getInfos() {
    
      this.http
      .post('https://mcec-server2.herokuapp.com/current_user', {
        email: this.currentUserToken.email,
      })
      .subscribe(
      (data: any) => {
          this.currentUserId = data.id;
          this.currentUser= data
          this.verifyHost()
          this.getFav()
        },
      (err) => console.log('error getting user infos!', err)
      );
  };

  getFav() {
    this.http
    .post('https://mcec-server2.herokuapp.com/display_favourite', {
      currentId: this.currentUserId,
    })
    .subscribe(
      (data: any) => {
        this.favorites=data
      },
      (err) => console.log('error getting user favorite', err)
    );
  };

  removeFromFav(){
    
  }

  clickEdit() {
    this.notEdit = !this.notEdit;
    this.toSubmit = true;
  }

  changeImg() {
    this.imgChange = true;
  }

  changeImg2() {
    this.imgChange2 = true;
  }

  selectFile(event) {
    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
    }
  }

  verifyHost() {
    if (this.currentUser.guest_or_host === 'host') {
      this.isHost = true;
    }
  }

  selectFile2(event) {
    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url2 = event.target.result;
      };
    }
  }

  onSubmit(): void {
    this.http
      .post<any>('https://mcec-server2.herokuapp.com/edit_profile',  this.currentUser)

      .subscribe(
        (data) => console.log('success!', data),
        (err) => console.log('error!', err)
      );
    this.show = true;
    //window.location.reload()
  }
}
