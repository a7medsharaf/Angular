import { Component, OnDestroy, OnInit } from '@angular/core';

import { filter, map, observable, Observable, subscribeOn, Subscription  } from 'rxjs';
import { userservice } from './services/user.service';
//import {  filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{

  private _scription:Subscription=new Subscription();
  useractivated:boolean=false;
  private user_subscription:Subscription=new Subscription();




  ngOnDestroy(): void {
    console.log('unsubcribing');
    this._scription.unsubscribe();
    this.user_subscription.unsubscribe();
  }


  
   counter:number=0;

  obs:Observable<string> = new Observable((observer) => {

console.log("Observable starts")
      setInterval(()=>{
        observer.next(this.counter.toString());
        this.counter++;

        if(this.counter===3)
        {
          observer.complete();
          //observer.error('Got error');
          
        }

      },1000)
      
  })
   handleupdateresponse(res:any)
   {
     console.log(res);
   }

   handleerror(err:any)
   {
     console.log(err);
   }

   handlecomplete()
   {
     console.log('observer completed');
   }


constructor(private userservice:userservice)
{

}

  ngOnInit() {

    this.user_subscription=this.userservice.activateuser.subscribe((res)=>{
      this.useractivated=res;
    })
    console.log('starting');

    //here we use operators like map operator
  
  this._scription=this.obs.pipe(map(
      (data:string)=>{
        return data='Number is '+data;
      }
    )
    ).subscribe(
      {next:this.handleupdateresponse.bind(this),
       error:this.handleerror.bind(this),
       complete:this.handlecomplete.bind(this)
     }
 
     )
     //subscription code without operators
    // this.myobserver=this.obs.subscribe(
    //  {next:this.handleupdateresponse.bind(this),
    //   error:this.handleerror.bind(this),
    //   complete:this.handlecomplete.bind(this)
    // }

    // )
    


  }
}
