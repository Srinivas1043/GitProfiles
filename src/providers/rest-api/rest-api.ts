import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class RestApiProvider {

  constructor(public http: Http) {
    console.log('Hello RestApiProvider Provider');
  }

  getGit(profileName:any) {

  	let apiurl:string =  "https://api.github.com/search/users?q=";
  	let val:string = profileName;
    console.log(val);
  	let completeurl:string = apiurl+val;
    return this.http.get(completeurl)
    .map(res => res.json());


  } 
   
}
