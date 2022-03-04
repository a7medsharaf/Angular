import { AfterContentInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from '../Models/User.model';
import { UsersAdmin } from '../services/UsersAdmin.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,AfterContentInit {
  signupform:FormGroup;
  Login:string='Login';
  islogin:boolean=false;

  Loginlinkactive:boolean=false;
  
  @ViewChild('Signupdiv') Signupdiv:ElementRef;
  @ViewChild('Logindiv') Logindiv:ElementRef;
   Loggedinuser:User=new User();
   Sub:Subscription=new Subscription();

  constructor(private UA:UsersAdmin) { }
  ngAfterContentInit(): void {
   
  }

  ngOnInit(): void {

    this.signupform=new FormGroup({

      
     'username':new FormControl(null,[Validators.required]),
      'password':new FormControl(null,[Validators.required]),
      'signupusername':new FormControl(null),
      'signuppassword':new FormControl(null)

  });

  this.Sub.add(this.UA.Usersubject.subscribe(response=>{
    this.Loggedinuser=response;
    console.log(this.Loggedinuser);
    // if(this.Loggedinuser.Authenticated && (<HTMLElement> this.Logindiv.nativeElement).style.display==="block")
    // {
    //   (<HTMLElement> this.Logindiv.nativeElement).style.display="none";
    // }

  }))
 
}


onsubmit()
{
  if(this.signupform.valid)
  {
   console.log(this.signupform);
   this.islogin=true;
   this.signupform.reset();

   if(this.Login==='Login')
   {
   this.Login='Logout';
   this.islogin=true;;
   }
   else
   {
   this.Login='Login';
   this.islogin=false;
   }
  }
  else{
    console.log('Not Valid');
    console.log(this.signupform);
    this.islogin=false;

  

  }
}

controldivs(s:Event)
{
  //console.log(s);
  console.log((<HTMLElement>s.target).id);
  console.log(this.Signupdiv.nativeElement);
  
    
   if((<HTMLElement>s.target).id ==="pills-profile-tab")
   {
    
    (<HTMLElement> this.Signupdiv.nativeElement).style.display="block";
    (<HTMLElement> this.Signupdiv.nativeElement).setAttribute('aria-selected','true');
    (<HTMLElement> this.Signupdiv.nativeElement).ariaSelected='true';
    (<HTMLElement> this.Logindiv.nativeElement).style.display="none";
    (<HTMLElement> this.Logindiv.nativeElement).ariaSelected='false';

    this.Loginlinkactive=false;
  }
  else if((<HTMLElement>s.target).id !== "pills-profile-tab"  && !this.Loggedinuser.Authenticated)
  {
    (<HTMLElement> this.Signupdiv.nativeElement).style.display="none";
    (<HTMLElement> this.Signupdiv.nativeElement).ariaSelected='false';
    (<HTMLElement> this.Logindiv.nativeElement).style.display="block";
    (<HTMLElement> this.Logindiv.nativeElement).ariaSelected='true';
    this.Loginlinkactive=true;
  }
}

signup()
{
  console.log(this.signupform.get('signupusername')?.value+" "+this.signupform.get('signuppassword')?.value);
this.UA.signup(this.signupform.get('signupusername')?.value,this.signupform.get('signuppassword')?.value)
.subscribe(
  Response=>{console.log(Response);})

}

signin()
{
  console.log(this.signupform.get('username')?.value+" "+this.signupform.get('password')?.value);
this.UA.signin(this.signupform.get('username')?.value,this.signupform.get('password')?.value)
.subscribe(
  
  Response=>{
    console.log("Updating token : "+Response.idToken);
    this.UA.Set_Token(Response);}
    ,errobj=>{alert(errobj.error.error.errors[0].message)}
    )
  

}


}
