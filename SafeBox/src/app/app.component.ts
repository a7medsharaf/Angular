import { Component, OnInit } from '@angular/core';
import {User} from './Models/User.model';
import { SafeBoxsService } from './services/SafeBoxs.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[SafeBoxsService]
})
export class AppComponent implements OnInit{
  title = 'SafeBox';

   LoggedinUser:User;

   constructor()
   {
     //testing code . this should come from the login service
     this.LoggedinUser=new User();
     this.LoggedinUser.NT='7578';
     this.LoggedinUser.Branch='00007';
     this.LoggedinUser.Name='Ahmed Sharaf'
   }

  ngOnInit(): void {
    console.log(this.LoggedinUser);
  }
}
