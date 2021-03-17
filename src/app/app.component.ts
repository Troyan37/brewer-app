import { Component, OnInit } from '@angular/core';
import { BrewerDataService } from './brewer-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private brewerService: BrewerDataService) { }
  
  ngOnInit(): void {
    // call API 
    // this.brewerService.getBeers().subscribe(
    //   items => {    
    //     console.log(items);
    //   },
    //   error => {
        
    //   }
    // );
  }
  
  title = 'brewer-app';
}
