import { Injectable } from "@angular/core";

@Injectable()
export class Logger
{
    constructor()
    {

    }

    LogMessage(val:string)
    {
        console.log(val);
    }
}