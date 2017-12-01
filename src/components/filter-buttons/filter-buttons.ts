import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'filter-buttons',
  templateUrl: 'filter-buttons.html'
})
export class FilterButtonsComponent {
  @Input() repos: Object;
  @Input() activeLanguage: String;
  
  @Output() activeLanguageChange = new EventEmitter();

  constructor() {
  }
  selectLanguage(language){
      if (language !== this.activeLanguage){
            this.activeLanguageChange.emit(language)
        }  
        else if (language === this.activeLanguage){
            this.activeLanguageChange.emit("")
        }
            console.log('Hello FilterButtonsComponent Component', this.activeLanguage);

  }
   
}
