import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class myinterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let newrequest=req.clone();
        //let newrequest=req.clone({headers:req.headers.append('sharaf','gamed')})
        console.log(newrequest);
        return next.handle(newrequest);
    }
    
}