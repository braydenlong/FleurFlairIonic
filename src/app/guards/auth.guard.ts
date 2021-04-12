import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { SessionService } from '../services/session.service';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanDeactivate<unknown> {

  constructor(private router: Router,
    private sessionService: SessionService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if (this.sessionService.getIsLogin()) {
        customer: Customer;
        let customer = this.sessionService.getCurrentCustomer();
  
        
          if (route.url[0].path == "customerAdmin") {
            return true;
          }
          else {
            this.router.navigate(['/accessRightError']);
            return false;
          }
        }
  
        else {
          this.router.navigate(['/accessRightError']);
          return false;
        }
        
      }
    
    
     
  
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}
