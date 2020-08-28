import { Component, OnInit, ElementRef, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cmail-form-group',
  templateUrl: './cmail-form-group.component.html',
  styles: [
  ]
})
export class CmailFormGroupComponent implements OnInit {
  textoDaLabel = ""
  idCampo = "";
  @Input() campo = new FormControl();

  constructor(private elemento: ElementRef) { }

  ngOnInit(): void {
    console.log(this.campo);
    const campo = this.elemento.nativeElement.querySelector('input');
    this.textoDaLabel = campo.name.replace(campo.name[0], campo.name[0].toUpperCase());
    this.idCampo = campo.name;
  }

}
