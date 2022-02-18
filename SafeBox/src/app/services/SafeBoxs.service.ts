import { Injectable } from "@angular/core";
import { SafeBox } from "../Models/SafeBox.model";
@Injectable()
export class SafeBoxsService{
    SafeBoxsList:SafeBox[]=[];

    constructor()
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

    GetBranchSafeBoxes(Branch:string):SafeBox[]
    {
         let s:SafeBox[]=[];
         let s1:SafeBox;

         this.SafeBoxsList.forEach((e)=>{
             if(e.holdingBranch===Branch)
             {
                 s1=new SafeBox();
                 s1=e;
                 s.push(s1);
             }
         })
        return s;
    }
}
