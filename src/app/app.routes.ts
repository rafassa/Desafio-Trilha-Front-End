import { Routes } from '@angular/router';
import { boasVindasComponent } from './Page/Admin/boas-vindas/boas-vindas.component';
import { LoginComponent } from './Page/Admin/login/login.component';
import { DashboardComponent } from './Page/Admin/dashboard/dashboard.component';
import { LojaComponent } from './Page/Loja/loja/loja.component';
import { FreteComponent } from './Page/Loja/Fretes/fretes.component';
import { CompraComponent } from './Page/Loja/compra/compra.component';
import { PaginaInicialComponent } from './Page/Inicio/pagina-inicial/pagina-inicial.component';
import { BoletoComponent } from './Page/Loja/boleto/boleto.component';
import { LancamentoComponent } from './Page/Inicio/lancamento/lancamento.component';
import { ContatoComponent } from './Page/Inicio/contato/contato.component';
import { AuthGuard } from './Segurança/auth.guard';


export const routes: Routes = [

    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'

    },
    {
    path:'home',
    component:PaginaInicialComponent
   },
  
   {
    path:'login',
    component:LoginComponent,
    children:[
    {
    path:'dashboard',
    component:DashboardComponent,
    canActivate: [AuthGuard]
   },
    {
    path:'homeAdmin',
    component:boasVindasComponent,
    canActivate: [AuthGuard]
   },
    ]
   },
  
   {
    path:'loja',
    component:LojaComponent,
    children:[
{
    path:'frete',
    component:FreteComponent,
     canActivate: [AuthGuard]
   },
   {
    path:'compra',
    component:CompraComponent,
     canActivate: [AuthGuard]
   },
   {
    path:'boleto',
    component:BoletoComponent,
     canActivate: [AuthGuard]
   },
    ]
   },
   {
    path:'lancamento',
    component:LancamentoComponent,
   },
   {
    path:'contato',
    component:ContatoComponent
   },
   

];
