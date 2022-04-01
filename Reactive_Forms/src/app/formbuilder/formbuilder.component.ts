import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, Validators,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  signupform:FormGroup;
  ngOnInit(): void {
   
    this.signupform= this.fb.group({
      UserName: null,
      Notes: null,
      sendCatalog: true,
      phone:[null,[Validators.required]],
      report:'SMS'});

  }
  onsubmit()
   {
    console.log(this.signupform);
   }

   checkreport(myval:string)
   {
    const myControl=this.signupform.get('phone') ;
    myControl.clearValidators();
   
    if(myval=="SMS")
     {
      myControl.setValidators(Validators.required);

     }
     else{

     }
     myControl.updateValueAndValidity();

   }

}
