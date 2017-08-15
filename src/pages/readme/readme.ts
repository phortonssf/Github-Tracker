import { Component} from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

//Services
import { MarkdownParserProvider } from '../../providers/markdown-parser/markdown-parser';
import { ReposProvider } from '../../providers/repos/repos';
import { AppUserProvider } from '../../providers/app-user/app-user';

//classes
import { Repo } from '../../classes/repo';

@Component({
  selector: 'readme',
  templateUrl: 'readme.html'
})
export class ReadmePage {
  readme: string;
  currentRepo: any;
  repoTitle: string;
  url: string;
  constructor(
    public _navCtrl: NavController,
    public _params: NavParams,
    public _md: MarkdownParserProvider,
    private _repo: ReposProvider,
    private _appUser: AppUserProvider
  ) {
    this.currentRepo = this._params.data.param2;
    this.url = this._params.data.url;
    this.repoTitle = this.currentRepo.name
  }
               
  updateOutput(mdText: string){
    this.readme = this._md.converter(mdText);
  }

  ionViewDidLoad() {
    let unconvertedText = this._params.data.param1
    this.updateOutput(unconvertedText);
  }
  
  saveRepo(){
    let favRepo = new Repo(
      this.repoTitle, 
      this.url, 
      this._appUser.credentials.userId
    )
    console.log("hit")
    this._repo.saveRepo(favRepo)
              .catch(error => {
        console.log("Error Saving Repo", error.status)
        throw error;
      })
    .map((res: Response) => res.json())
    .subscribe(
      
        data => {
          console.log("Saved", data)
          return data}) 
   
  }
}
