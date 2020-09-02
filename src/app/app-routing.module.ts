import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const rotasApp: Routes = [
    {
        path: 'cadastro',
        loadChildren: () => import('./modules/cadastro/cadastro.module').then(m => m.CadastroModule)
    },
    {
        path: 'inbox',
        canActivate: [AuthGuard],
        loadChildren: () => import('./modules/caixa-de-entrada/caixa-de-entrada.module').then(m => m.CaixaDeEntradaModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
    },
    {
        path: '',
        pathMatch: 'full', 
        redirectTo: 'inbox'
    },
    {
        path: '**',
        pathMatch: 'full', 
        redirectTo: 'login'
    }
];

@NgModule({
 imports: [
    RouterModule.forRoot(rotasApp)
 ],
 exports: [
    RouterModule
 ],
 providers: [AuthGuard]
})
export class AppRoutingModule {}