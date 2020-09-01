import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { LoginForm, LoginDTO } from 'src/app/models/LoginDto';

interface ResponseLogin {
  email: string;
  avatar: string;
  token: string;
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

  constructor(private httpClient: HttpClient) {}

  handleLogin(formLogin: NgForm){
    if(formLogin.valid){
      const loginUser = new LoginDTO(this.login);

      this.httpClient
        .post('http://localhost:3200/login', loginUser)
        .subscribe(
          (response: ResponseLogin) => {
            localStorage.setItem('cmail-token', response.token);
          },
          (responseError: HttpErrorResponse) => {
            this.mensagemError = responseError.error.body
          }
        )
    }
  }


}
