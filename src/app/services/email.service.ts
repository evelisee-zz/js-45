import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EmailDto } from '../models/EmailDto';
import { map } from 'rxjs/operators';

@Injectable()
export class EmailService {

    constructor(private http: HttpClient){}

    api = `${environment.apiUrl}emails`;

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('cmail-token')
        })
    }

    enviar({destinatario, assunto, conteudo}){
        const emailParaApi = {
            to: destinatario,
            subject: assunto,
            content: conteudo
        }
        return this.http.post(this.api, emailParaApi, this.httpOptions)
        .pipe<EmailDto>(
            map(
                (emailDaApi: any) => {
                    return new EmailDto(emailDaApi);
                }
            )
        )

    }
}