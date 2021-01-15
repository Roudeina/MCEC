import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import { UploadService } from  '../upload.service';


@Component({
  selector: 'app-become-ahost',
  templateUrl: './become-ahost.component.html',
  styleUrls: ['./become-ahost.component.css']
})
export class BecomeAhostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
