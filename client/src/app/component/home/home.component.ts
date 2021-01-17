import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit {

  constructor() { }
cards=[
  {title:"Be a Great Member", body:"Whether you’re traveling the world, hosting travelers, or making friends locally, being a conscientious and generous.",imgUrl:"https://c.stocksy.com/a/WT2400/z9/962830.jpg", cols: 1, rows: 1 },

  {title:"Become A Host ",body:"It's all about sharing and connection. Be open to giving, receiving, and discovering the unexpected.",imgUrl:"https://cdn.greatlifepublishing.net/wp-content/uploads/sites/2/2020/05/29123405/Virtual-HH-5-728x486.jpg", cols: 1, rows: 1 },

  {title:"Respect differences",body:"Help make the world smaller and friendlier. The diversity of people across the globe is a beautiful thing, so contribute by respecting and appreciating those differences, be they cultural or otherwise.",imgUrl:"https://www.forsythwoman.com/wp-content/uploads/2016/02/78_internationalwomensdays.jpg", cols: 2, rows: 1 },

];

  ngOnInit(): void {

  }
  cardsDisplay=this.cards.map((card)=>{
    card
  })
}
