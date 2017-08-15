import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { trigger,state,  style, transition, animate, group }from '@angular/animations';
import { GithubApiProvider } from '../../providers/github-api/github-api';
import { NavController, NavParams } from 'ionic-angular';

//Pages
import { ReadmePage } from '../../pages/readme/readme';

@Component({
  selector: 'repo-card',
  templateUrl: 'repo-card.html',
  animations: [
  trigger('flyInOut', [
    state('active', style({transform: 'translateX(0)'}))
    // transition('void => *', [
    //   style({transform: 'translateX(-100%)'}),
    //   animate(100)
    // ])
   
  ])
]
  
  
  
//   animations: [
//     trigger('itemAnim', [
//      transition(':enter', [
//       style({transform: 'translateX(    300%)'}),
//       animate(350)
//      ])])
//      ,

//      trigger('itemOut',[
//         transition(':leave', [
//         style({
//           transform: 'translateX(+200%)'}),
//           animate(350)
//          ])
//     ])
//     ] 
})
export class RepoCardComponent implements OnChanges {
  @Input("Repo")repo: any;
  @Input("RepoNum")repoNum: any;
  @Input("ActiveLanguage")activeLanguage: any;
   state: String = "inactive"; 
   encodedData = "";
   searchQuery: string ='';
  constructor( private _githubApi: GithubApiProvider,
               private _navCtrl: NavController,
               private _params: NavParams
      ){}
    ngOnChanges(changes: SimpleChanges) {
        
        if(this.repo.language === this.activeLanguage){
            this.state = "active"
        }
        else{
            this.state = "inactive"
        }
        console.log("change", this.state)
    }
  
  toReadme(repo){
        console.log("I a repo",this.state) 
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
