import { Injectable } from "@angular/core";
import { Branch } from "../Models/Branch.model";
import { User } from "../Models/User.model";

@Injectable({providedIn:'root'})
export class UsersAdmin{

    CurrentBranch:Branch;
    constructor()
    {
        this.CurrentBranch=new Branch();
    }

    Get_Branch_Object(code:string):Branch
    {
        
        let B=new Branch();
        this.CurrentBranch.Code=code;

        let LoggedinUser=new User();
        LoggedinUser.NT='7578';
        LoggedinUser.Branch='00007';
        LoggedinUser.Name='Ahmed Sharaf'

        this.CurrentBranch.Manager=LoggedinUser;
        

        let LoggedinUser2=new User();
        LoggedinUser2.NT='2555';
        LoggedinUser2.Branch='00007';
       
        LoggedinUser2.Name='Hany Wadie'
        this.CurrentBranch.Users.push(LoggedinUser);
        this.CurrentBranch.Users.push(LoggedinUser2);

        return this.CurrentBranch;
    }

    Can_Edit(U:User):Boolean
    {
        let B=new Branch();
        B=this.Get_Branch_Object(U.Branch);
        if(B.Manager.NT===U.NT)
        {
                return true;
        }
        return false;
    }
}