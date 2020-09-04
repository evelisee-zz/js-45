import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from 'src/app/services/page.service';

@Component({
    selector: 'cmail-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{
    
    private _isMenuOpen = false;
    tituloDaPagina = ""; 
    userInfo = {
        avatarUrl:"",
        name:"",
        email:""
    }

    constructor(
        private router: Router,
        private pageService: PageService
        ){
            this.pageService.titulo.subscribe(novoTitulo => this.tituloDaPagina = novoTitulo);
        }

    ngOnInit(){
        const jsonLogin = JSON.parse(localStorage.getItem('jsonLogin'));
        this.userInfo.name = jsonLogin.name;
        this.userInfo.email = localStorage.getItem('email');
        this.userInfo.avatarUrl = localStorage.getItem('avatarUrl');
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