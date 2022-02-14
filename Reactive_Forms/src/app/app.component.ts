import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signupform:FormGroup;
  ngOnInit(): void {
    this.signupform=new FormGroup({
      'username':new FormControl(null,Validators.required),
      'useremail':new FormControl(null,[Validators.required,Validators.email]),
      'usergender':new FormControl('Female')
    })
  }
  title = 'Reactive_Forms';
   GenderArr:string[]=['Male','Female'];
   onsubmit()
   {
     if(this.signupform.valid)
     {
      console.log(this.signupform);
     }
     else{
       console.log('Not Valid');
     }
   }
}
