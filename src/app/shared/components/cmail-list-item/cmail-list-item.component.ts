import { Component, OnInit, Input } from '@angular/core';

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


  constructor() { }

  ngOnInit(): void {
  }

}
