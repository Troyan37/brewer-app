import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BrewerDataService } from '../brewer-data.service';
import { LocalStorageService } from '../local-storage.service';
import { OptionsService } from '../options.service';
import { Beer } from '../shared/beer.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

  error = null;
  isMore : boolean;
  listAmount: number = 15;
  listAmountSub: Subscription;
  beers : Beer[] = [];
  brewers : string[];
  selectedBrewer : string;
  sortByParam: string = "name";
  sortByParamSub : Subscription;
  showImage : boolean = false;
  imageURL: string;

  constructor(
    private brewerService: BrewerDataService,
     private optionsService : OptionsService,
      private localStorageService: LocalStorageService,
       private modalService: NgbModal) { }

  ngOnInit(): void {


    if(this.localStorageService.getItem('sortBy')) {
      this.sortByParam = this.localStorageService.getItem('sortBy');  
    }

    if(this.localStorageService.getItem('amount')) {
      this.listAmount = parseInt(this.localStorageService.getItem('amount'));  
    }

    this.isMore = false;
    this.getBrewers();
    this.sortByParamSub = this.optionsService.sortByEmitter.subscribe(param => {
      this.sortByParam = param;
    });
    this.listAmountSub = this.optionsService.listAmountEmitter.subscribe(amount => {
      this.listAmount = amount;
    });

  }


  onChooseBrewer(passedBrewer : string) {
    this.selectedBrewer = passedBrewer;
    this.beers.splice(0, this.beers.length);
    this.onLoadMoreBeers();
  }

  onLoadMoreBeers(){

    this.brewerService.getBeers().subscribe(
      items => {
        items.filter( val => {
          return val.brewer === this.selectedBrewer
        } ).slice(this.beers.length, this.beers.length + this.listAmount).forEach(
          (beer)=>{
            this.beers.push(new Beer(beer.name, beer.type, beer.price, beer.image_url));
          }
        )

      if( items.filter( val => {
        return val.brewer === this.selectedBrewer
      } ).slice(this.beers.length, this.beers.length + this.listAmount).length === 0 ){
        this.isMore = false;
      }else{
        this.isMore = true;
      }

      },
      error => {
      
        this.error = error.message;
        console.log(error);
      }
    );
    }

    getBrewers() {
      this.brewerService.getBeers().subscribe(
        items => {
         this.brewers = Array.from(new Set(items.map(a => a.brewer)));
        },
        error => {
          this.error = error.message;
          console.log(error);
        }
      ); 
    }

    
  open(content, image) {
    this.imageURL = image;
    this.modalService.open(content);
  }


    ngOnDestroy(): void {
      this.sortByParamSub.unsubscribe();
      this.listAmountSub.unsubscribe();
    }
}
