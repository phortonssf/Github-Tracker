import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
//Providers
import { GithubApiProvider } from '../../providers/github-api/github-api';
import { ReposProvider } from '../../providers/repos/repos';

//import { AppUserProvider } from '../../providers/app-user/app-user';


//Pages
import { ReadmePage } from '../readme/readme';
import { LandingPage } from '../landing/landing';

@Component({
  selector: 'lobbyPage',
  templateUrl: 'lobby.html'
})
export class LobbyPage {
    encodedData = ""
    searched: Boolean = false;
    searchQuery: string ='';
    languagesCount: Object;
    activeLanguage: String; // Variable to identify touched search
    repos: Observable<any>;
    saved: any;
    constructor(
        private _githubApi: GithubApiProvider,
        private _repos: ReposProvider,
        public _navCtrl: NavController,
        public _params: NavParams
    ){}
 
    ionViewDidLoad() {}
            
 
    //Resets the search bar to empty
    clear(){
        this.searchQuery = "";
        this.activeLanguage == ""
    }
    
    //Logs us ou
    logout(){
        this._navCtrl.setRoot(LandingPage)
    }
    /*Event is search bar input. Goes to github returns repos as Observable
    and we subscribe to the data on the html using the async pipe, and filter 
    data with other custome pipes on template. 
    res.items = repos
    */
    search(event){
         this.searched = true;
         console.log("asdf", this.searched)
        this.searchQuery = event.value;
        this.activeLanguage = ""
        this._githubApi.getRepos(event.value)
        this.repos = this._githubApi.repos
    }
    /*Sets active language for filter buttons and resets to all languages when 
    the active language filter button is pushed.
    */
    selectLanguage(language){
        if (language !== this.activeLanguage){
            console.log("1ssst")
            this.activeLanguage = language
        }  
        else if (language === this.activeLanguage){
            this.activeLanguage = "" 
        }
    }
    /* Uses current repo.url to go git the readme for that repo
    Navigates to readme page, 
    */
    toReadme(repo){
        console.log("I a repo",repo) 
        this._githubApi.getReadMe(repo.url)
        .map(res => res.json())
        .subscribe(res => {
            console.log("rrrrrr",res)
           this.encodedData = res.content
           console.log("encodedData", this.encodedData)
           let decodedData = window.atob(this.encodedData); 
           this._navCtrl.push(ReadmePage, {
               param1: decodedData, 
               param2: repo, 
               url: repo.url
            })}, 
        err => {
            alert("Error");
        });
    }
}


 



