import { Component, OnInit } from '@angular/core';

import {SearchModel} from './search-model';

import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-res-of-search',
  templateUrl: './res-of-search.component.html',
  styleUrls: ['./res-of-search.component.css']
})
export class ResOfSearchComponent implements OnInit {

  constructor(private  http: HttpClient) { }
cards=[{title:"this is the title",body:"this is the body",image:"this is the image"},{title:"this is the title",body:"this is the body",image:"this is the image"},{title:"this is the title",body:"this is the body",image:"this is the image"},{title:"this is the title",body:"this is the body",image:"this is the image"}];
model= new SearchModel([],0,0)
  ngOnInit(): void {
    
    this.http.post<any>("http://localhost:8080/search",{})
    .subscribe(
      (data) =>{
        console.log('success is success successsss',data);
        // this.cards=data
    },
      err => console.log('error is error!',err)
    )
  }
  cardsDisplay=this.cards.map((card)=>{
    card
  })

}
