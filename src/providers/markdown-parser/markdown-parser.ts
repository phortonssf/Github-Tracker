import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as marked from "marked";
//import marked from 'marked';
/*
  Generated class for the MarkdownParserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MarkdownParserProvider {
  private md: MarkedStatic             
  constructor(
    public http: Http
    )
    {
      console.log('Hello MarkdownParser Provider'); 
      this.md = marked;
      this.md.setOptions({
        gfm: true
      })
    } 
  converter(markdown: string){
  return this.md.parse(markdown);
  }
}
