import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
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