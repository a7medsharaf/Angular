import { User } from "./User.model";

export class Branch{
    public Code:string="";
   public  Users:User[]=[];
   public  Manager:User={NT:"",Branch:"",Name:""};

    constructor()
    {
        this.Code="";
        this.Users=[];
        this.Manager={NT:"",Branch:"",Name:""};
    }
  

}