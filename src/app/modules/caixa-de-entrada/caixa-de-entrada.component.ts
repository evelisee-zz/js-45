import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';
import { NgForm } from '@angular/forms';
import { PageService } from 'src/app/services/page.service';

export interface Email {
  id: string;
  destinatario: string;
  assunto: string;
  conteudo: string;
  introducaoDoConteudo: string;
  dataDeEnvio: string;
}

@Component({
  selector: 'app-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styleUrls: ['./caixa-de-entrada.component.css']
})
export class CaixaDeEntradaComponent implements OnInit  {
  private _isNewEmailFormOpen = false;
  email = {
    destinatario: '',
    assunto: '',
    conteudo: ''
  }
  listaEmails: Email[] = [];

  
  constructor(
    private emailService: EmailService,
    private pageService: PageService
  ){}

  ngOnInit() {
    this.emailService.listar()
    .subscribe(lista => {
      this.listaEmails = lista
    });

    this.pageService.enviaTitulo('Caixa de Entrada');
  }


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

  removeEmail(id: string){
    console.log(id);
    this.emailService.deletar(id)
    .subscribe(resp => {
      console.log(resp);
      this.listaEmails = this.listaEmails.filter(email => email.id != id);
    },
    erro => console.log(erro))
  }

}
