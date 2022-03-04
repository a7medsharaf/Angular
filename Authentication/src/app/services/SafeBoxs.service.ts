import { Injectable } from "@angular/core";
import { SafeBox } from "../Models/SafeBox.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable()
export class SafeBoxsService{
    SafeBoxsList:SafeBox[]=[];

    constructor(private http: HttpClient)
    {
        this.SafeBoxsList=[
            {No:'111',Type:'Private',Rental:'322',holdingBranch:'00007'},
            {No:'222',Type:'Private',Rental:'322',holdingBranch:'00007'},
            {No:'333',Type:'Private',Rental:'322',holdingBranch:'00476'},
            {No:'444',Type:'Private',Rental:'322',holdingBranch:'00007'},
            {No:'555',Type:'Private',Rental:'322',holdingBranch:'00476'},
            {No:'666',Type:'Private',Rental:'322',holdingBranch:'00007'}
            ]
    }

    GetBranchSafeBoxes(Branch:string):Observable<{ [key: string]: SafeBox; }>
    {
         let s:SafeBox[]=[];
        //  let s1:SafeBox;

        //  this.SafeBoxsList.forEach((e)=>{
        //      if(e.holdingBranch===Branch)
        //      {
        //          s1=new SafeBox();
        //          s1=e;
        //          s.push(s1);
        //      }
        //  })


        return  this.http.get<{[key:string]:SafeBox}>('https://test-f9c6f-default-rtdb.firebaseio.com/Safeboxes.json')
      
    }

    
}
