import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servers2',
  templateUrl: './servers2.component.html',
  styleUrls: ['./servers2.component.css']
})
export class Servers2Component implements OnInit {
Servers2:any[]=[{serverID:1,serverName:"Server1",serverStatus:"online"},
                {serverID:2,serverName:"Server2",serverStatus:"offline"},
                {serverID:3,serverName:"Server3",serverStatus:"offline"},
                {serverID:4,serverName:"Server4",serverStatus:"online"}];
  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }
  editserver2(id:number)
  {
    console.log('inside');
    this.router.navigate(['/servers2',id,'edit'],{queryParams:{allowedit:id.toString()},fragment:"qq"});
  }

}
