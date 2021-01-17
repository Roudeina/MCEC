import { Component, OnInit } from '@angular/core';
import {Filter} from './filter';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  nationalities= ["afghan","albanian","algerian"];
  filtred= new Filter("",18,"","")
  constructor(private http: HttpClient) { }
  onSubmit(){
    console.log('data to be sent',this.filtred)
    this.http.post<any>("http://localhost:8080/search",this.filtred)
    .subscribe(
        data =>console.log('success',data),
        err => console.log('error!',err)
      )
  }
  ngOnInit(): void {
  }

}
