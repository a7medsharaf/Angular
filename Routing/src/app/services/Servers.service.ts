import { Injectable } from "@angular/core";
import { ServerModel } from "../Models//Server.model";

@Injectable()
export  class ServersService
{
    
     ServersArr:ServerModel[]=[];


    constructor()
    {
         this.ServersArr=[{serverID:"1",serverName:"Development Server"},
        {serverID:"2",serverName:"UAT Server"},
        {serverID:"3",serverName:"DR Server"},
        {serverID:"4",serverName:"Production Server"}
    
    ];

    }  
    
    GetServerData(id:string)
    {
        
        const serverpromise = new Promise<ServerModel>((resolve, reject) => {
           
            setTimeout(() => {

                let s:ServerModel=new ServerModel();
                s.serverID="";
                 s.serverName="";
                this.ServersArr.forEach(element => {
                  if(element.serverID===id)
                   {
                     s= element;
                   }
           
             });
                console.log('resolving');
              resolve(s);
            }, 5000);

          

        })
        
        
       
        return serverpromise;
    }
    
    
}


