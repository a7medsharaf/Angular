import { Component, OnInit } from '@angular/core';
import { Branch } from '../Models/Branch.model';
import { UsersAdmin } from '../services/UsersAdmin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  
  mybranch:Branch;
  constructor(private U:UsersAdmin)
  {
    this.mybranch=new Branch();
  }
  ngOnInit(): void {
      this.mybranch=this.U.CurrentBranch;
  }

}
