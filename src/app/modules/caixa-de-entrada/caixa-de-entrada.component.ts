import { Component } from '@angular/core';

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

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen;
  }

  toggleNewEmailForm() {
    this._isNewEmailFormOpen = !this._isNewEmailFormOpen;
  }

  handleNewEmail() {
    this.listaEmails.push(this.email);
  }

}
