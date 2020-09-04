import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EmailDto, EmailApi } from '../models/EmailDto';
import { map } from 'rxjs/operators';
import { Email } from '../modules/caixa-de-entrada/caixa-de-entrada.component';

interface EmailView {
    destinatario: string;
    assunto: string
    conteudo: string
}

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

    enviar({destinatario, assunto, conteudo}: EmailView){
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

    listar() {
        return this.http
        .get(this.api, this.httpOptions)
        .pipe<Email[]>(
            map(
                (listaDeEmails: any) => {
                    return listaDeEmails.map((valor: EmailApi) => new EmailDto(valor));
                }
            )
        )

    }

    deletar(id: string){
        return this.http.delete(`${this.api}/${id}`, this.httpOptions)
    }
}