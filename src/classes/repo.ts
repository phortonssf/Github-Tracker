export class Repo {
    title: string;
    url: String;
    userId: String;
  
    
    constructor( title: any,
                 url: String,
                 userId: String
    ){
        this.title = title
        this.url = url
        this.userId = userId
     }
}