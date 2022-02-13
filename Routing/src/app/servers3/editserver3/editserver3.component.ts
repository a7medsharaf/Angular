import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerModel } from 'src/app/Models/Server.model';
import { ServersService } from 'src/app/services/Servers.service';

@Component({
  selector: 'app-editserver3',
  templateUrl: './editserver3.component.html',
  styleUrls: ['./editserver3.component.css']
})
export class Editserver3Component implements OnInit {

  constructor(private AR:ActivatedRoute,private SS:ServersService) { }
  localPageServer:ServerModel={serverID:"",serverName:""};

  ngOnInit(): void {
    
    this.AR.queryParams.subscribe(res=>{
      this.localPageServer={serverID:"",serverName:""};
      console.log(res) //will give query params as an object
      console.log('query paraam allowedit : '+this.AR.snapshot.queryParams['allowedit']);
      console.log('URL paraam ID : '+this.AR.snapshot.params['id']);
      
      this.SS.GetServerData(this.AR.snapshot.params['id'])
      .then(
        (result_server)=>{
          console.log(result_server.serverName);
          this.localPageServer=result_server;
        }
      );
        
      
    
      })
      


    }
}
