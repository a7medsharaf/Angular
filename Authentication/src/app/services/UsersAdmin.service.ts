import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, ReplaySubject, Subject } from "rxjs";
import { Branch } from "../Models/Branch.model";
import { User } from "../Models/User.model";
import { signupResponse } from "../Interfaces/signupResponse.interface";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import {CookieService} from 'ngx-cookie-service';
@Injectable({providedIn:'root'})
export class UsersAdmin{

    CurrentBranch:Branch;
    Access_Token:string='';
    LoggedinUser:User=new User();
    Usersubject=new BehaviorSubject <User>(this.LoggedinUser);

    constructor(private http:HttpClient,private router:Router,private cookieService:CookieService)
    {
       // this.LoggedinUser=new User();
        this.LoggedinUser.NT='7578';
        this.LoggedinUser.Branch='00007';
        this.LoggedinUser.Name='Ahmed Sharaf'
        this.Usersubject.next(this.LoggedinUser);
        console.log("user emitted");
        this.CurrentBranch=new Branch();
        this.CurrentBranch=this.Get_Branch_Object(this.LoggedinUser.Branch);
    }

    Get_Branch_Object(code:string):Branch
    {
        
        let B=new Branch();
        this.CurrentBranch.Code=this.LoggedinUser.Branch;

        let LoggedinUser=new User();
        LoggedinUser.NT='7578';
        LoggedinUser.Branch='00007';
        LoggedinUser.Name='Ahmed Sharaf'

        this.CurrentBranch.Manager=LoggedinUser;
        

        let LoggedinUser2=new User();
        LoggedinUser2.NT='2555';
        LoggedinUser2.Branch='00007';
       
        LoggedinUser2.Name='Hany Wadie'
        this.CurrentBranch.Users.push(LoggedinUser);
        this.CurrentBranch.Users.push(LoggedinUser2);

        return this.CurrentBranch;
    }

    // Can_Edit(U:User):Boolean
    // {
    //     let B=new Branch();
    //     B=this.Get_Branch_Object(U.Branch);
    //     if(B.Manager.NT===U.NT)
    //     {
    //             return true;
    //     }
    //     return false;
    // }

    signup(email:string,password:string):Observable<signupResponse>
    {
        return this.http.post<signupResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBeDP07UuZQdEYiJPLwrf3HwaPucMucoy0',{
            email:email,
            password:password,
            returnSecureToken:true
        })
    }
     signout()
     {
         this.LoggedinUser.Auth_Token='';
         this.LoggedinUser.Authenticated=false;
         this.Usersubject.next(this.LoggedinUser);
         localStorage.removeItem('user');
         this.router.navigate(['/Grid',this.LoggedinUser.Branch]);
     }
    signin(email:string,password:string)
    {
        return this.http.post<signupResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBeDP07UuZQdEYiJPLwrf3HwaPucMucoy0',{
            email:email,
            password:password,
            returnSecureToken:true
        })
    }

    // Get_Token():string{
    //     return this.Access_Token;
    // }

    Set_Token(user:signupResponse)
    {
        this.LoggedinUser.Authenticated=true;
        this.LoggedinUser.Auth_Token=user.idToken;  
       // localStorage.setItem('user',JSON.stringify(this.LoggedinUser));
        this.Usersubject.next(this.LoggedinUser);
       this.setcookie(this.LoggedinUser);
       this.setCookie('testcookie',JSON.stringify(this.LoggedinUser),34);
    }
    
    private setCookie(name: string, value: string, expireDays: number, path: string = '') {
        let d:Date = new Date();
        d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
        let expires:string = `expires=${d.toUTCString()}`;
        let cpath:string = path ? `; path=${path}` : '';
        document.cookie = `${name}=${value}; ${expires}${cpath}`;
    }


    setcookie(U:User)
    {
      
       let domain = "localhost";
    let path = '/';
    let secure = true;
    let expiry = new Date();
    expiry.setDate(expiry.getDate()+365);
   
        this.cookieService.set(
            'userCookie',
            JSON.stringify(U)
            ,expiry,path,domain,secure,'None'
           ); 
        
    }

    getcookie()
    {
        if(this.cookieService.check('userCookie')) 
        {
           console.log('cookie found');
           console.log(this.cookieService.get('userCookie'));
            this.Usersubject.next(<User>JSON.parse(this.cookieService.get('userCookie')));
        }
       // this.Usersubject.next(<User>JSON.parse(this.cookieService.get('userCookie')));
    }
}