import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ResponseLogin } from '../modules/login/login.component';
import { Observable } from 'rxjs';
import { LoginAPI } from '../models/Login';
import { environment } from 'src/environments/environment';

@Injectable()
export class LoginService {

    constructor(
        private http: HttpClient
    ){}

    api = `${environment.apiUrl}login`;

    logar(dadosLogin: LoginAPI): Observable<ResponseLogin> {
        return this.http.post(this.api, dadosLogin)
        .pipe(
            map((response: ResponseLogin) => {
                localStorage.setItem('cmail-token', response.token);
                localStorage.setItem('name', response.name);
                localStorage.setItem('avatarUrl', response.avatarUrl);
                localStorage.setItem('email', response.email);
                localStorage.setItem('jsonLogin', JSON.stringify(response));
                return response;
            })
        );
    }

}