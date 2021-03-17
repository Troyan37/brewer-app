import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpEventType
} from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { Beer } from './shared/beer.model';

@Injectable({
  providedIn: 'root'
})
export class BrewerDataService {


  mockData = [
    {"product_id": 127031, "name": "Mad Jack Mixer 1", "size": "12  \u00d7  Can 355\u00a0ml", 
"price": "22.95", "beer_id": 121, 
"image_url": "https://produits.bienmanger.com/34519-0w470h470_Kingfisher_Premium_Beer_From_India.jpg",
 "category": "Domestic Specialty", "abv": "5.0", "style": "N/A", "attributes": "N/A", "type": "Lager", "brewer": "Molson", "country": "Canada", "on_sale": false},
 {"product_id": 127032, "name": "Mad Jack Mixer 2", "size": "12  \u00d7  Can 355\u00a0ml", 
 "price": "213.95", "beer_id": 122, 
 "image_url": "https://www.coffeedesk.pl/photos/products/normal/8a348c7e90a80a6f2dead0f2b24fb00d.jpg",
  "category": "Domestic Specialty", "abv": "5.0", "style": "N/A", "attributes": "N/A", "type": "Lager", "brewer": "Blah", "country": "Canada", "on_sale": false},
  {"product_id": 127033, "name": "CCC Jack Mixer 3", "size": "12  \u00d7  Can 355\u00a0ml", 
  "price": "29.95", "beer_id": 123, 
  "image_url": "https://www.scrummy.pl/18906-large_default/virgils-root-beer.jpg",
   "category": "Domestic Specialty", "abv": "5.0", "style": "N/A", "attributes": "N/A", "type": "Lager", "brewer": "Blah", "country": "Canada", "on_sale": false},
   {"product_id": 127033, "name": "BBB Jack Mixer 4", "size": "12  \u00d7  Can 355\u00a0ml", 
   "price": "3.95", "beer_id": 123, 
   "image_url": "https://www.scrummy.pl/18906-large_default/virgils-root-beer.jpg",
    "category": "Domestic Specialty", "abv": "5.0", "style": "N/A", "attributes": "N/A", "type": "Lager", "brewer": "Polber", "country": "Canada", "on_sale": false},
    {"product_id": 127033, "name": "FFF", "size": "12  \u00d7  Can 355\u00a0ml", 
    "price": "2.95", "beer_id": 123, 
    "image_url": "https://www.scrummy.pl/18906-large_default/virgils-root-beer.jpg",
     "category": "Domestic Specialty", "abv": "5.0", "style": "N/A", "attributes": "N/A", "type": "Lager", "brewer": "Polber", "country": "Canada", "on_sale": false},
     {"product_id": 127033, "name": "ZZZ", "size": "12  \u00d7  Can 355\u00a0ml", 
     "price": "26.85", "beer_id": 123, 
     "image_url": "https://www.scrummy.pl/18906-large_default/virgils-root-beer.jpg",
      "category": "Domestic Specialty", "abv": "5.0", "style": "N/A", "attributes": "N/A", "type": "Lager", "brewer": "Molson", "country": "Canada", "on_sale": false},
      {"product_id": 127033, "name": "Mad Jack Mixer 7", "size": "12  \u00d7  Can 355\u00a0ml", 
      "price": "20.95", "beer_id": 123, 
      "image_url": "https://www.scrummy.pl/18906-large_default/virgils-root-beer.jpg",
       "category": "Domestic Specialty", "abv": "5.0", "style": "N/A", "attributes": "N/A", "type": "Lager", "brewer": "Blah", "country": "Canada", "on_sale": false},
       {"product_id": 127033, "name": "AAA Jack Mixer 8", "size": "12  \u00d7  Can 355\u00a0ml", 
       "price": "13.95", "beer_id": 123, 
       "image_url": "https://www.scrummy.pl/18906-large_default/virgils-root-beer.jpg",
        "category": "Domestic Specialty", "abv": "5.0", "style": "N/A", "attributes": "N/A", "type": "Lager", "brewer": "Blah", "country": "Canada", "on_sale": false},
        {"product_id": 127033, "name": "Mad Jack Mixer 9", "size": "12  \u00d7  Can 355\u00a0ml", 
        "price": "93.95", "beer_id": 123, 
        "image_url": "https://www.scrummy.pl/18906-large_default/virgils-root-beer.jpg",
         "category": "Domestic Specialty", "abv": "5.0", "style": "N/A", "attributes": "N/A", "type": "Lager", "brewer": "Molson", "country": "Canada", "on_sale": false},
         {"product_id": 127033, "name": "Mad Jack Mixer 10", "size": "12  \u00d7  Can 355\u00a0ml", 
         "price": "27.95", "beer_id": 123, 
         "image_url": "https://www.scrummy.pl/18906-large_default/virgils-root-beer.jpg",
          "category": "Domestic Specialty", "abv": "5.0", "style": "N/A", "attributes": "N/A", "type": "Lager", "brewer": "Polber", "country": "Canada", "on_sale": false},
          {"product_id": 127033, "name": "CCC", "size": "12  \u00d7  Can 355\u00a0ml", 
          "price": "26.95", "beer_id": 123, 
          "image_url": "https://www.scrummy.pl/18906-large_default/virgils-root-beer.jpg",
           "category": "Domestic Specialty", "abv": "5.0", "style": "N/A", "attributes": "N/A", "type": "Lager", "brewer": "Molson", "country": "Canada", "on_sale": false}
  ]
    

  constructor(private http: HttpClient) { }


  getBeersMock() {
    return this.mockData;
  }

  getBrewers() {
    return "test";
  }


  getBeers() {
    return this.http
      .get(
        'http://ontariobeerapi.ca/beers',
        {
          responseType: 'json'
        }
      );
    }
}





