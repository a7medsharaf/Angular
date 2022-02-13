import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editserver2',
  templateUrl: './editserver2.component.html',
  styleUrls: ['./editserver2.component.css']
})
export class Editserver2Component implements OnInit {
  Servers2:any[]=[{serverID:1,serverName:"Server1",serverStatus:"online"},
  {serverID:2,serverName:"Server2",serverStatus:"offline"},
  {serverID:3,serverName:"Server3",serverStatus:"offline"},
  {serverID:4,serverName:"Server4",serverStatus:"online"}];
  constructor(private AR:ActivatedRoute) { }

  ngOnInit(): void {
    this.AR.queryParams.subscribe(res=>{
      console.log(res) //will give query params as an object
    })
  }


  //   this.AR.params.subscribe(params => {
  //     console.log('detecting : '+ params['id']);
  //  //   console.log('params : '+this.AR.snapshot.queryParams);
  // });
  // }

}
