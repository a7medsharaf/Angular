import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servers3',
  templateUrl: './servers3.component.html',
  styleUrls: ['./servers3.component.css']
})
export class Servers3Component implements OnInit {
  Servers3:any[]=[{serverID:1,serverName:"Server1",serverStatus:"online"},
  {serverID:2,serverName:"Server2",serverStatus:"offline"},
  {serverID:3,serverName:"Server3",serverStatus:"offline"},
  {serverID:4,serverName:"Server4",serverStatus:"online"}];
  constructor(private router:Router) { }
  editserver3(id:number)
  {
    console.log('inside server 3 fn');
    this.router.navigate(['/servers3',id],{queryParams:{allowedit:id.toString()},fragment:"qq"});
  }
  ngOnInit(): void {
  }

}
