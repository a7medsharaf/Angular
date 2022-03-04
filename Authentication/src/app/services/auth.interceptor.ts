import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
  } from "@angular/common/http"
import { Injectable } from "@angular/core"
  import { Observable, Subscription } from "rxjs"
import { User } from "../Models/User.model"
import { UsersAdmin } from "./UsersAdmin.service"
@Injectable()
  export class AuthInterceptor implements HttpInterceptor {
     LoggedinUser:User;
     Sub:Subscription;

    constructor(private UA:UsersAdmin){

        this.LoggedinUser=new User();
        this.Sub=new Subscription();
        this.Sub.add(this.UA.Usersubject.subscribe(loggeduser=>{
            this.LoggedinUser=loggeduser;
            console.log("getting token : "+this.LoggedinUser.Auth_Token);
        }))

    }
    intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      const cloneReq = req.clone({
        params: req.params.set(
          "auth",
          this.LoggedinUser.Auth_Token
        ),
      })
      return next.handle(cloneReq)
    }
  }