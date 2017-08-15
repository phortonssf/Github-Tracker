import { Pipe, PipeTransform } from '@angular/core';

/**
 *This pipe takes in an array and reduces the count for repos. language
 * e.g.: {javascript: 4, C++: 1}.
 * After the reduce we need to make the item an array so we can iterate over 
 * it on the template with *ngFor and subscribe with aysnc pipe
 */
@Pipe({
  name: 'itemiter',
})
export class ItemiterPipe implements PipeTransform {
  //res is repos
  transform(res): Array<any> {
    if( res !== null){
        let repos = res.items
        let repoDict = this.reducer(repos)
        return this.toIterable(repoDict)
      }
      else{
        return []
      }
  }
  
  // Reduces array into uniques and counts number of uniques
  reducer (arrToreduce){  
    let dict = arrToreduce.reduce( (sum, current)=>{
          let lang = current.language  
          if( lang !== null || undefined ){
              if(current.language in sum){
                sum[current.language]++
              }
              else{
                sum[current.language]=1
              }
          }
          else if ( sum["No Language"] >= 1){
            sum["No Language"]++
          }
          else{
            sum["No Language"] = 1
          }
          return sum
        }, {})
        return dict
      }
  //Creates iterable array for each key value pair in object.
  toIterable(dict){
    let results = []
    for (var key in dict) {
            if (dict.hasOwnProperty(key)) {
              results.push({key: key, val: dict[key]})
            }
          }
    return results.sort((prev, current)=>current.val - prev.val)
  } 
  
}


