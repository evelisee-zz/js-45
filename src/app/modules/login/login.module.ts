import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { LoginRoutingModule } from './login-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedComponentsModule } from 'src/app/shared/shared.module';
import { LoginService } from 'src/app/services/login.service';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    SharedComponentsModule,
    HttpClientModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
