import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ReposProvider {
  url: string = "http://git-tracker-phortonssf.c9users.io:8080/api/";
  reposEndpoint: string = "repos";
  constructor(
    public _http: Http
  ) {}
  saveRepo(favRepo){
    return this._http.post(
      this.url + this.reposEndpoint, 
      favRepo
  )}
  
}
