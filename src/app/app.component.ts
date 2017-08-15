import { Component} from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//states
//import { LandingPage } from '../pages/landing/landing';
import { LobbyPage } from '../pages/lobby/lobby';

@Component({
  templateUrl: 'app.html'

  
})
export class MyApp {
  //rootPage:any = LandingPage;
   rootPage:any = LobbyPage;

  constructor( platform: Platform, 
               statusBar: StatusBar, 
               splashScreen: SplashScreen
  ) {platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

  
  
  

//   // make HelloIonicPage the root (or first) page
//   rootPage: any = LandingPage;
//   pages: Array<{title: string, component: any}>;

//   constructor(
//     public platform: Platform
//     ) {
//     this.initializeApp();

//     // set our app's pages
//     this.pages = [

//       { title: 'LandingPage', component: LandingPage},
    

//     ];
//   }

//   initializeApp() {
//     this.platform.ready().then(() => {
//       // Okay, so the platform is ready and our plugins are available.
//       // Here you can do any higher level native things you might need.
//       StatusBar.styleDefault();
//     });
//   }

// }

