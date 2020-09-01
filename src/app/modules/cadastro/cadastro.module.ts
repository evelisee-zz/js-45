import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CmailFormGroupComponent } from 'src/app/components/cmail-form-group/cmail-form-group.component';
import { CmailFormFieldDirective } from 'src/app/components/cmail-form-group/cmail-form-field.directive';
import { SharedComponentsModule } from 'src/app/shared/shared.module';
import { CadastroRoutingModule } from './cadastro-routing.module';



@NgModule({
  declarations: [
    CadastroComponent,
    CmailFormGroupComponent,
    CmailFormFieldDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedComponentsModule,
    CadastroRoutingModule
  ]
})
export class CadastroModule { }
