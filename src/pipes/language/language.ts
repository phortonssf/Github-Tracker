import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'language',
})
export class LanguagePipe implements PipeTransform {
  /**
   * Filters repo results on language passed in as arg from the top 5 languages
   * found in query. Must have default empty array value for asyn pipe to work.
   * After that just a filter on the res.items AKA repos. Args is current repos
   * to be shown, if activeRepo is set to "" then no filter is applied.
   */
  transform(res: any,args) {
  
    let filteredData;
    //Sets empty array for asynce pipe else pipe is trying to subscribe to null
    if (res == false){
      return []
    }
    else if (res){
      
      let repos = res.items;
      if (!args){
        return repos
      }
      else{
        filteredData = this.filterByLanguage(repos, args)
        return filteredData
      }}
   }
   //Filters repos by args given
  filterByLanguage(repos, args){
    let filteredRepos = repos
      .filter( repo => {
        if(args !== "No Language"){
          console.log("hit", )
              return repo.language === args
        }
        else{
          return repo.language === null
        }
      })
      console.log("before filter", filteredRepos)
      return filteredRepos
  }
    
}
