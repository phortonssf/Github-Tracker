import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppUser } from '../../classes/appUser';
import { LobbyPage } from '../lobby/lobby';
//Providers
import { AppUserProvider } from '../../providers/app-user/app-user';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  constructor(
      public _navCtrl: NavController, 
      public _navParams: NavParams,
      private  _appUser: AppUserProvider
    ) {}
  
  ionViewDidLoad() {}
  
  registerUser(user){
    console.log("register user on page fired", user)
    this._appUser.registerUser(user)
        .map(res => res.json())
        .subscribe(res => {
  // handle successful responses and decide what happens next
            window.localStorage.setItem('token', res.token);
            window.localStorage.setItem('userId', res.id);
            this._navCtrl.setRoot(LobbyPage);
        },err =>{
    alert(err)
    })
  }

}
