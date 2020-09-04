import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from 'src/app/services/page.service';

@Component({
    selector: 'cmail-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    
    private _isMenuOpen = false;
    tituloDaPagina = ""; 
    
    constructor(
        private router: Router,
        private pageService: PageService
        ){
            this.pageService.titulo.subscribe(novoTitulo => this.tituloDaPagina = novoTitulo);
        }

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