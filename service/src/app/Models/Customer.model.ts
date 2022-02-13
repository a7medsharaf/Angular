import { Account } from "./Account.model";

export class Customer{
    CID :number=0;
    CName :string="";
    Accounts:Account[]=[];
    constructor(cid:number,cname:string)
    {
        this.CID=cid;
        this.CName=cname;
    }
}