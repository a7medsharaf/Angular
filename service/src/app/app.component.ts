import { Component, Injectable, Injector } from '@angular/core';
import { Customer } from './Models/Customer.model';
import { Communication } from './Services/Communication.service';
import {Customers} from './Services/Customers.service';
import { Logger } from './Services/Logger.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Customers,
  Logger,
  Communication]
})

export class AppComponent {
  title = 'service_Project';
 

  constructor(private customers:Customers , private Communicator:Communication){
    
  }
}
