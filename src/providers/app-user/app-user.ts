import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppUserProvider {
  url: string = "http://git-tracker-phortonssf.c9users.io:8080/api/";
  usersEndpoint: string = "appUsers";
  credentials: any;
  constructor(
    private _http: Http
  ){}
  
  setCredials(token: string, userId: string){
    console.log("appuser", token, userId)
    let results = { 
        token: token,
        userId: userId
      }
    return this.credentials = results
  }
  
  registerUser(newUserData){
    return this._http.post(
      this.url + this.usersEndpoint, 
      newUserData 
  )} 
  
  login(userInfo){
     return this._http.post(
       this.url + this.usersEndpoint +"/login", 
       userInfo 
  )}
}
