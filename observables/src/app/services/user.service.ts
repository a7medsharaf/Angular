import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()

export class userservice
{
  activateuser:Subject<boolean>=new Subject<boolean>();
  
}