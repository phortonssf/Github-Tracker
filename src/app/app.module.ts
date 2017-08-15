import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar} from '@ionic-native/status-bar';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Pipes
import {  LanguagePipe } from '../pipes/language/language';
import { ItemiterPipe } from '../pipes/itemiter/itemiter';
//Provider
import { GithubApiProvider } from '../providers/github-api/github-api';
import { MarkdownParserProvider } from '../providers/markdown-parser/markdown-parser';//Modules
import { UserProvider } from '../providers/user/user';
import { AppUserProvider } from '../providers/app-user/app-user';
import { ReposProvider } from '../providers/repos/repos';

//Pages
import { LobbyPage } from '../pages/lobby/lobby';
import { LandingPage } from '../pages/landing/landing';
import { ReadmePage } from '../pages/readme/readme';
import { RegisterPage } from '../pages/register/register';
//Components
import { FilterButtonsComponent } from '../components/filter-buttons/filter-buttons';
import { RegisterFormComponent } from '../components/register-form/register-form';
import { NiceCardComponent } from '../components/nice-card/nice-card';
import { RepoCardComponent } from '../components/repo-card/repo-card';



const injections = [
  MyApp,
  LandingPage, 
  LobbyPage,
  ReadmePage,
  FilterButtonsComponent,
  RegisterPage
]
@NgModule({
 
  declarations:[
    injections,
    LanguagePipe,
    ItemiterPipe,
    RegisterFormComponent,
    NiceCardComponent,
    RepoCardComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: injections,
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GithubApiProvider,
    MarkdownParserProvider,
    UserProvider,
    AppUserProvider,
    ReposProvider
    ]
})
export class AppModule {}
