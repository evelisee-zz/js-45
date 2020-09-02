import { Component } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';
import { NgForm } from '@angular/forms';

interface Email {
  destinatario: string;
  assunto: string;
  conteudo: string;
}

@Component({
  selector: 'app-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styleUrls: ['./caixa-de-entrada.component.css']
})
export class CaixaDeEntradaComponent  {
  private _isNewEmailFormOpen = false;
  email = {
    destinatario: '',
    assunto: '',
    conteudo: ''
  }
  listaEmails: Email[] = [];

  constructor(private emailService: EmailService){}

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen;
  }

  toggleNewEmailForm() {
    this._isNewEmailFormOpen = !this._isNewEmailFormOpen;
  }

  handleNewEmail(formEmail: NgForm) {
    if(formEmail.invalid) return;

    this.emailService.enviar(this.email)
    .subscribe(
      emailDaApi => {
        this.listaEmails.push(emailDaApi);
        this.email = {
          destinatario: '',
          assunto: '',
          conteudo: ''
        }
        formEmail.reset();
      },
      erro => console.log(erro)
    )
  }

}
