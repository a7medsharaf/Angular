import { Component, OnInit } from '@angular/core';
import { userservice } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userservice:userservice) { }

  ngOnInit(): void {
  }


  Activate_user()
  {
    this.userservice.activateuser.next(true);
  }
}
