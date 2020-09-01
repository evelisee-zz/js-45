import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ResponseLogin } from '../modules/login/login.component';
import { Observable } from 'rxjs';
import { LoginAPI } from '../models/login.interface';

@Injectable()
export class LoginService {

    constructor(
        private http: HttpClient
    ){}

    api = 'http://localhost:3200/login';

    logar(dadosLogin: LoginAPI): Observable<ResponseLogin> {
        return this.http.post(this.api, dadosLogin)
        .pipe(
            map((response: ResponseLogin) => {
                localStorage.setItem('cmail-token', response.token);
                document.cookie = `cmail-token=${response.token}`
                return response;
            })
        );
    }

}