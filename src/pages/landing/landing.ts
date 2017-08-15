import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
//Pages
import { LobbyPage } from '../lobby/lobby';
import { RegisterPage } from '../register/register';
//Providers
import { AppUserProvider } from '../../providers/app-user/app-user';

@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
 
})

export class LandingPage {

  constructor(
      public _navCtrl: NavController, 
      public menuCtrl: MenuController,
      private _appUser: AppUserProvider
  ) {}
    ionViewDidLoad() {
      //this.menuCtrl.swipeEnable(false, 'menu1');
    }
        
  // Empty User object to be filled by loginForm()
  user = {
    email: "test@gmail.com",
    password: "test"
  };
  
  //Invoked by login button
  login(){
    this._appUser.login(this.user)
        .map(res => res.json())
        .subscribe(res => {
          console.log("res login", res)
  // handle successful responses and decide what happens next
            this._appUser.setCredials( res.id, res.userId)
            window.localStorage.setItem('token', res.id);
            window.localStorage.setItem('userId', res.userId);
            this._navCtrl.setRoot(LobbyPage);
        }, err =>{
          alert(err)
        })
  }
  toRegister(){
    this._navCtrl.push(RegisterPage)  
  }
}
