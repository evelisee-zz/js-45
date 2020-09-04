import { Component, OnInit } from '@angular/core';
import {  HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import {  LoginDTO } from 'src/app/models/LoginDto';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { PageService } from 'src/app/services/page.service';

export interface ResponseLogin {
  email: string;
  avatarUrl: string;
  token: string;
  name: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = {
    email: '',
    senha: ''
  }
  mensagemError = "";

  ngOnInit() {
  }

  constructor(
    private loginService: LoginService,
    private router: Router,
    private pageService: PageService
    ) {
      this.pageService.enviaTitulo('Login');
    }

  handleLogin(formLogin: NgForm){
    if(formLogin.valid){
      const loginUser = new LoginDTO(this.login);

      this.loginService.logar(loginUser)
      .subscribe(
        () => this.router.navigate(['/inbox']),
        (responseError: HttpErrorResponse) => {
          this.mensagemError = responseError.error.body;
        }
      )
    }
  }


}
