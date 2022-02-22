import { Time } from "@angular/common";
import { time } from "console";

export class Visit{
    id:number=0;
    Name:string='';
    Relationship:string='';
    Vdate:Date;
    Vtime:string='';
    
    constructor(){
        this.Vdate=new Date();
        
    }
}