import { Component, OnInit } from '@angular/core';
import { BrewerDataService } from './brewer-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  constructor() { }
  
  title = 'brewer-app';
}
