import { Injectable } from "@angular/core";
import { Account } from "../Models/Account.model";
import { Customer } from "../Models/Customer.model";
import { Logger } from "./Logger.service";
@Injectable()
export  class Customers
{
    
    


    constructor(private Logger:Logger)
    {
        let Accounts:Account[]=[{ncp:'11',cha:'cc',mon:55,cfn:'N'},
        {ncp:'12',cha:'ee',mon:334,cfn:'N'},
        {ncp:'13',cha:'dd',mon:5335,cfn:'N'},
        {ncp:'14',cha:'dwdd',mon:344,cfn:'N'},
        {ncp:'15',cha:'ddwe',mon:23,cfn:'N'}
    
    ];

    let C1:Customer=new Customer(8888,"Sharaf");
    C1.Accounts.push(Accounts[0]);
    C1.Accounts.push(Accounts[1]);
    C1.Accounts.push(Accounts[2]);

    let C2:Customer=new Customer(9999,"Essam");
    C2.Accounts.push(Accounts[3]);
    C2.Accounts.push(Accounts[4]);
    
    this.Customers.push(C1);
    this.Customers.push(C2);
    }

    Customers:Customer[]=[];
    
    AddCustomer(C:Customer)
    {
        this.Customers.push(C);
        this.Logger.LogMessage("Customer "+C.CName+" Created");
    }
    
    
}