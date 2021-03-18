import { Injectable } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import { share } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrewerDataService {

  public responseCache = new Map();
  private cachedObservable:  Observable<any>;

  constructor(private http: HttpClient) { }


  getBeers(): Observable<any> {

    let observable: Observable<any>;
    const beersFromCache = this.responseCache.get('/beers');

    if(beersFromCache) {
      //Return data from cache
      return of (beersFromCache);
    }else if(this.cachedObservable){
      //Return data from cached observable
      return this.cachedObservable;
    }

    this.cachedObservable = this.http
    .get<any>(
      '/beers',
      {
        responseType: 'json'
      }
    ).pipe(
      share()
      );
    
      observable = this.cachedObservable;

    observable.subscribe(beers => this.responseCache.set('/beers', beers));
    //Return data from API
    return observable;
    }
}


