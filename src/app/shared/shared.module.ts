import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CmailFormFieldDirective } from './components/cmail-form-group/cmail-form-field.directive';
import { CmailFormGroupComponent } from './components/cmail-form-group/cmail-form-group.component';
import { CmailListItemComponent } from './components/cmail-list-item/cmail-list-item.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CmailFormFieldDirective,
    CmailFormGroupComponent,
    CmailListItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    CmailFormFieldDirective,
    CmailFormGroupComponent,
    CmailListItemComponent,
  ]
})
export class SharedComponentsModule { }
