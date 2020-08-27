import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styleUrls: ['./caixa-de-entrada.component.css']
})
export class CaixaDeEntradaComponent  {
  private _isNewEmailFormOpen = false;
  title = "cmail"
  email = {
    destinatario: '',
    assunto: '',
    conteudo: ''
  }
  listaEmails = [];

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen;
  }

  toggleNewEmailForm() {
    this._isNewEmailFormOpen = !this._isNewEmailFormOpen;
  }

  handleNewEmail(formEmail: NgForm) {
    console.log(formEmail);
    this.listaEmails.push(this.email);
  }

}
