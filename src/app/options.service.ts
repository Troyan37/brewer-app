import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  themeEmitter = new Subject<string>();
  listAmountEmitter = new Subject<number>();
  sortByEmitter = new Subject<string>();
  
}


