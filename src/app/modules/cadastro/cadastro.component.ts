import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  telefoneValidator = Validators.compose([
    Validators.required,
    Validators.minLength(8),
    Validators.pattern('[0-9]?[0-9]{4}-?[0-9]{4}')
  ])

  formCadastro = new FormGroup({
    nome: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required),
    telefone: new FormControl('', this.telefoneValidator),
    avatar: new FormControl('', Validators.required)
  });

    constructor() { }
  
    ngOnInit(): void {
    }

    
    cadastrar() {
      console.log(this.formCadastro.get('telefone'))
    if(this.formCadastro.valid){
      console.log('Deu certo');
    } else {
      console.log(this.formCadastro);
      this.formCadastro.markAllAsTouched()
    }
  }



}
