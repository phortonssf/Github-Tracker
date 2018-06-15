import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

/*
  Generated class for the GithubApiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class GithubApiProvider {
  constructor(
    public http: Http
  ){}
  repos: any;  
  
  getRepos(values): Observable<Array<any>>{
    return this.repos = this.http.get("https://api.github.com/search/repositories?q=" + values + "&sort=stars&order=desc")
      .map((res) => {
         return res.json()
   });
  }

  getReadMe(url){
    return this.http.get (url + "/readme")
  }
 
}

