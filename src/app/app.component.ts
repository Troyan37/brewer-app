import { Component, OnInit, Renderer2 } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { OptionsService } from './options.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private optionsService : OptionsService, private renderer: Renderer2, private localStorageService : LocalStorageService) { }
  
  ngOnInit(): void {
    
    this.optionsService.themeSelection.subscribe(theme => {
      if (theme.oldValue) {
        this.renderer.removeClass(document.body, theme.oldValue);
      }
      this.renderer.addClass(document.body, theme.newValue);
    })
  }


  title = 'brewer-app';
}
