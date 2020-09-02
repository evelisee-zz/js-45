import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private router: Router){}

    canActivate(): boolean {    
        if(localStorage.getItem('cmail-token')) {
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }


}