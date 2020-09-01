import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';

const rotasCaixaDeEntrada: Routes = [
    { 
        path: '', 
        component: CaixaDeEntradaComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(rotasCaixaDeEntrada)
    ],
    exports: [
        RouterModule
    ]
})

export class CaixaDeEntradaRoutingModule {}