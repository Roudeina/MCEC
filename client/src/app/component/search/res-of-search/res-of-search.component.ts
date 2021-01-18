import { Component, OnInit } from '@angular/core';

import {SearchModel} from './search-model';

import {HttpClient} from '@angular/common/http';

import {PageEvent} from '@angular/material/paginator';


@Component({
  selector: 'app-res-of-search',
  templateUrl: './res-of-search.component.html',
  styleUrls: ['./res-of-search.component.css']
})
export class ResOfSearchComponent implements OnInit {
  length = 100;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  constructor(private  http: HttpClient) { }
  cardss=[]
// cards=[{title:"this is the title",body:"this is the body",image:"this is the image"},{title:"this is the title",body:"this is the body",image:"this is the image"},{title:"this is the title",body:"this is the body",image:"this is the image"},{title:"this is the title",body:"this is the body",image:"this is the image"}];
model= new SearchModel([],0,0)
  ngOnInit(): void {
    
    this.http.post<any>("http://localhost:8080/search",{})
    .subscribe(
      (data) =>{
        console.log('success is success successsss',data);
         this.cardss=data.rows
         console.log('this.cards',this.cardss)
    },
      err => console.log('error azertyuio is error!',err)
    )
  }
}
