import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpResponseBase, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, retry } from 'rxjs/operators';
import { UserDTO } from 'src/app/models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  mensagensErro = [];


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
    avatar: new FormControl('', [Validators.required], this.validaImagem.bind(this))
  });

    constructor(
      private httpClient: HttpClient,
      private router: Router
    ) { 
    }
  
    ngOnInit(): void {
    }

    validaImagem(campoDoFormulario: FormControl) {
      return this.httpClient
        .head(campoDoFormulario.value, {
          observe: 'response'
        })
        .pipe(
          map((response: HttpResponseBase) => {
            return response.ok ? null : [{ urlInvalida: true }]
          }),
          catchError((error) => {
            return [{ urlInvalida: true}];
          }),
        )
    }

    cadastrar() {

    if(this.formCadastro.valid){
      const userData = new UserDTO(this.formCadastro.value);
      this.httpClient.post('http://localhost:3200/users', userData)
      .subscribe(
        () => {
          alert('Deu bom');
          this.formCadastro.reset();
          this.router.navigate(['']);
        }
        , (responseError: HttpErrorResponse) => {
          this.mensagensErro = responseError.error.body
        }
      )
    } else {
      this.formCadastro.markAllAsTouched()
    }
  }



}
