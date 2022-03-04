import { User } from "./User.model";

export class Branch{
    public Code:string="";
   public  Users:User[]=[];
   public  Manager:User;

    constructor()
    {
        this.Code="";
        this.Users=[];
        this.Manager=new User();
    }
  

}