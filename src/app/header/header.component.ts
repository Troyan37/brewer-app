import { Component, OnInit } from '@angular/core';
import { OptionsService } from '../options.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private optionsService : OptionsService) { }

  ngOnInit(): void {
  }

  onChangeSorting(param : string) {
    this.optionsService.sortByEmitter.next(param);
  }

  onChangeAmount(amount : string) {
    this.optionsService.listAmountEmitter.next(parseInt(amount));
  }


}
