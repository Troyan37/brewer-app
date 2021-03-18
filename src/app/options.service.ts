import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export interface ThemeObject {
  oldValue: string;
  newValue: string;
};

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  initialSetting: ThemeObject = {
    oldValue: null, 
    newValue: 'bootstrap'
  };

  themeSelection = new BehaviorSubject<ThemeObject>(this.initialSetting);

  listAmountEmitter = new Subject<number>();
  sortByEmitter = new Subject<string>();
 
  
  
  setTheme(theme: string) {

    this.themeSelection.next(
      {
        oldValue: this.themeSelection.value.newValue, 
        newValue: theme
      });
  }

}





