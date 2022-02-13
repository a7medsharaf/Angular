
import { EventEmitter } from "@angular/core";
import { Customer } from "../Models/Customer.model";

export class Communication
{
    
    activeCustomer=new EventEmitter<Customer>();
    
}