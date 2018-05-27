import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  profiles:Profile[];

    constructor(public navCtrl: NavController , private Rest: RestApiProvider ) {
       
    }
    
      OnInit(proname:any)
      {
      	let valprofile = proname.target.value;
        this.Rest.getGit(valprofile).subscribe((profiles)=> {
           this.profiles = profiles;
        });
        
      }
  	
    	/*getNames(profilename:any){
      	let val = profilename.target.value;
      	console.log(val);
      }*/
  }
  
  interface Profile{
  login:string,
  avatar_url:any,
  score:number
  }