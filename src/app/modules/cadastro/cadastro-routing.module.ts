import { CadastroComponent } from "./cadastro.component";
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const rotasCadastro: Routes = [
    { 
        path: '', 
        component: CadastroComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(rotasCadastro)
    ],
    exports: [
        RouterModule
    ]
})

export class CadastroRoutingModule {}