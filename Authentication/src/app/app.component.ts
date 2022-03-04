import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {User} from './Models/User.model';
import { SafeBoxsService } from './services/SafeBoxs.service';
import { UsersAdmin } from './services/UsersAdmin.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[SafeBoxsService]
})
export class AppComponent implements OnInit{
  title = 'SafeBox';

   LoggedinUser:User;
   Sub:Subscription;
   Loginlinktitle:string='Login Now!';
   constructor(private router:Router,private UA:UsersAdmin)
   {
     //testing code . this should come from the login service
     this.Sub=new Subscription();
     this.LoggedinUser=new User();

     
     
     
   }

  ngOnInit(): void {
    this.Sub.add(this.UA.Usersubject.subscribe(response=>{
      this.LoggedinUser=response;
      console.log("user recived ");
      console.log(this.LoggedinUser);

      if (localStorage.getItem("user") != null) {
        this.LoggedinUser=JSON.parse(localStorage.getItem("user")!);
        this.UA.Usersubject.next(this.LoggedinUser);
        console.log("User found");
        console.log(this.LoggedinUser);
      }

     


      if(this.LoggedinUser.Authenticated)
      {
        this.Loginlinktitle='Logout';
      }
      else
      {
        this.Loginlinktitle='Login';
      }
    }));
    
    this.UA.getcookie();
  }
  ViewGrid()
  {
    this.router.navigate(['/Grid']);
  }

  log_title()
  {
    if(this.LoggedinUser.Authenticated && this.Loginlinktitle==='Logout')
    {
      this.UA.signout();
      
    }
  }
}
