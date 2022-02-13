import { Component, OnInit  } from '@angular/core';
import { Customer } from '../Models/Customer.model';
import {Customers} from '../Services/Customers.service';
@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  cname:string="";
  constructor(private customers:Customers) { }

  ngOnInit(): void {
  }

  add_customer(){

  this.customers.AddCustomer(new Customer(9343,this.cname));
   
   
  }

}
