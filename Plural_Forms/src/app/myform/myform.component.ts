import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { formInterface } from '../Interfaces/Form.interface';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {

myformoriginal:formInterface={ Name:"",
exampleInputEmail1:"",
TA:"",
defaultCheck1:true,
exampleFormControlSelect1:"Monthly",
exampleRadios:"option2"
}
 

myform:formInterface={...this.myformoriginal};

  constructor() { }

  ngOnInit(): void {
  }

  onsubmit(form:NgForm)
  {
    console.log(form.valid);
    console.log(form.controls);
    console.log(form.value);
  }

}
