import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable()
export class ProductGuardService implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
        
         const isItDoneYet = new Promise<boolean>((resolve, reject) => {
           
              setTimeout(() => {
                  console.log('resolving');
                resolve(true);
              }, 5000);

            

          })
         
       return isItDoneYet;
    }
   
}