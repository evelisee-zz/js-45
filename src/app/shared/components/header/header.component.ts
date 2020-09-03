import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'cmail-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    
    private _isMenuOpen = false;
    
    constructor(private router: Router){}

    get isMenuOpen() {
        return this._isMenuOpen;
    }

    toggleMenu() {
        this._isMenuOpen = !this._isMenuOpen;
    }

    logout() {
        localStorage.removeItem('cmail-token');
        this.router.navigate(['login']);
    }
}