import { Component, OnInit } from '@angular/core';
import { Customer } from '../Models/Customer.model';
import { Communication } from '../Services/Communication.service';
import {Customers} from '../Services/Customers.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList:Customer[]=[];
  
  constructor(private customers:Customers,private Communicator:Communication) { }

  ngOnInit(): void {
    this.customerList=this.customers.Customers;
    this.Communicator.activeCustomer.emit(this.customers.Customers[0]);
    
  }

}
