import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  titulo = new Subject<string>();

  enviaTitulo(novoTitulo: string){
    document.querySelector('title').textContent = `${novoTitulo} - Cmail`;
    this.titulo.next(novoTitulo);
  }
}
