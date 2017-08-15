import { Component,  Output,  EventEmitter} from '@angular/core';


@Component({
  selector: 'register-form',
  templateUrl: 'register-form.html'
})
export class RegisterFormComponent {
  newUser = {}
  @Output() registerUser = new EventEmitter();
  constructor() {}
  register(){
    console.log("register before event", this.newUser)
    this.registerUser.emit(this.newUser)
  }
}
