import { Component, OnInit } from '@angular/core';
import { Customer } from '../Models/Customer.model';
import { Communication } from '../Services/Communication.service';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {
  active:Customer=new Customer(0,"");

  constructor(private Communicator:Communication) { 
  this.Communicator.activeCustomer.subscribe(
    (C:Customer)=>{this.active=C}
  )

  }

  ngOnInit(): void {
    
  }

}
