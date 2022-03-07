import { Component, OnInit } from '@angular/core';
import { formInterface } from '../Interfaces/Form.interface';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {

myformoriginal:formInterface={ Name:"ahmed",
exampleInputEmail1:"a@s.a",
TA:"aa",
defaultCheck1:true,
exampleFormControlSelect1:"Monthly",
exampleRadios:"option2"
}
 

myform:formInterface={...this.myformoriginal};

  constructor() { }

  ngOnInit(): void {
  }

}
