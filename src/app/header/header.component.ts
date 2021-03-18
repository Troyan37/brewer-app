import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { OptionsService } from '../options.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  theme: string = 'bootstrap';
  constructor(private optionsService : OptionsService, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }

  onChangeSorting(param : string) {
    this.localStorageService.setItem('sortBy', param);
    this.optionsService.sortByEmitter.next(param);
  }

  onChangeAmount(amount : string) {
    this.localStorageService.setItem('amount', amount);
    this.optionsService.listAmountEmitter.next(parseInt(amount));
  }

  toggleTheme() {
    if (this.theme === 'bootstrap') {
      this.theme = 'bootstrap-dark';
    } else  {
      this.theme = 'bootstrap';
    }

    this.optionsService.setTheme(this.theme)
  }

}
