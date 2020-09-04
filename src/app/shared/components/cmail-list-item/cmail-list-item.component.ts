import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cmail-list-item',
  templateUrl: './cmail-list-item.component.html',
  styleUrls: ['./cmail-list-item.component.css']
})
export class CmailListItemComponent implements OnInit {
  @Input() destinatario = "";
  @Input() asssunto = "";
  @Input() introducaoDoConteudo = "";
  @Input() dataDeEnvio = "";
  @Output('eventoVaiRemover') remover = new EventEmitter();
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  deletarEmail() {
    this.remover.emit();
  }

}
