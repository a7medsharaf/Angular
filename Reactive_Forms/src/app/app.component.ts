import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  forbiddennames:string[]=['khawal','3ars'];
  errorsarr:string[]=[];
  signupform:FormGroup;
  ngOnInit(): void {
    this.signupform=new FormGroup({

      'userData':new FormGroup({
     'username':new FormControl(null,[Validators.required,this.forbidden.bind(this)]),
      'useremail':new FormControl(null,[Validators.required,Validators.email]),
      'usergender':new FormControl('Female')
    }),
    'hobbies':new FormArray([])
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
       console.log(this.signupform);

     

     }
   }

   onhobbies()
   {
     const control=new FormControl(null,Validators.required);
     (<FormArray>  this.signupform.get('hobbies')).push(control);
   }

   usernamevalidators():boolean
   {
     let res:boolean=false;
     this.errorsarr=[];
     if(this.signupform.get('userData.username')!.status=='INVALID')
     {
      if(this.signupform.get('userData.username')!.errors!['nameisforbidden'] ===true)
      {
          this.errorsarr.push('Name is forbidden');
          console.log(this.errorsarr)
          res=true;
      }
     }
   
    else
    {
      console.log(this.errorsarr)
      res=false;
    }
    return res;
   }

   get_array()
   {
    return this.signupform.get('hobbies') as FormArray
   }

   forbidden(C:FormControl)
   {
      if(this.forbiddennames.includes(C.value) )
      {
        console.log(this.forbiddennames.indexOf(C.value)+' true');
        return {'nameisforbidden':true}
      }
      else
      {
        console.log('false');
        return null;
      }
     
   }
}
