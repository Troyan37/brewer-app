import { Component, OnInit } from '@angular/core';
import { BrewerDataService } from '../brewer-data.service';
import { Beer } from '../shared/beer.model';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

  // isFetching = false;
  // error = null;
  isMore : boolean;
  listAmount: number = 2;  //@input ?
  beers : Beer[];
  brewers : string[];
  selectedBrewer : string;
  sortByParam: string = "name"; // name/type/price

  constructor(private brewerService: BrewerDataService) { }

  ngOnInit(): void {
    this.beers = [];
    this.isMore = false;
    this.brewers = this.getBrewers();
  }


  onChooseBrewer(passedBrewer : string) {
    this.selectedBrewer = passedBrewer;
   
    this.beers.splice(0, this.beers.length);
    this.onLoadMoreBeers();
  }

  onLoadMoreBeers(){

    console.log(this.brewerService.getBeersMock().filter( val => {
      return val.brewer === this.selectedBrewer
    } ));

    this.brewerService.getBeersMock().filter( val => {
      return val.brewer === this.selectedBrewer
    } ).slice(this.beers.length, this.beers.length + this.listAmount).forEach(
      (beer)=>{
        this.beers.push(new Beer(beer.name, beer.type, beer.price, beer.image_url));
      }
      )
      
      if( this.brewerService.getBeersMock().filter( val => {
        return val.brewer === this.selectedBrewer
      } ).slice(this.beers.length, this.beers.length + this.listAmount).length === 0 ){
        this.isMore = false;
      }else{
        this.isMore = true;
      }
    }

    getBrewers() {
      return Array.from(new Set(this.brewerService.getBeersMock().map(a => a.brewer)));
    }



  //   let bigCities = cities.filter(function (e) {
  //     return e.population > 3000000;
  // });


  //   this.isFetching = true;
  //   this.brewerService.getBeers().subscribe(
  //     items => {
  //       this.isFetching = false;
  //       console.log(items);
  //     },
  //     error => {
  //       this.isFetching = false;
  //       this.error = error.message;
  //       console.log(error);
  //     }
  //   );
  // }

}
