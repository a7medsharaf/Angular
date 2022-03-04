import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Branch } from '../Models/Branch.model';
import { UsersAdmin } from '../services/UsersAdmin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  
  mybranch:Branch;
  Sub:Subscription=new Subscription();
  constructor(private U:UsersAdmin)
  {
    this.mybranch=new Branch();
  }
  ngOnInit(): void {
      this.mybranch=this.U.CurrentBranch;
      this.Sub.add(this.U.Usersubject.subscribe(response=>{this.mybranch}))
  }

}
