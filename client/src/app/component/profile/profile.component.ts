import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../_services/token-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  
  constructor(private token: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser()
    console.log(this.currentUser);
    
  }

  clickEdit(){
     this.notEdit = !this.notEdit
     this.toSubmit = true
  }

  changeImg(){
    //to verify
  }

  onSubmit(): void {

  }

}
