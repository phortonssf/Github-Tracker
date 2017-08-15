import { Component } from '@angular/core';

/**
 * Generated class for the NiceCardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'nice-card',
  templateUrl: 'nice-card.html'
})
export class NiceCardComponent {

  text: string;

  constructor() {
    console.log('Hello NiceCardComponent Component');
    this.text = 'Hello World';
  }

}
