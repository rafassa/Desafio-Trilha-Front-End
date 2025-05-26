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
import { loginprotectionGuard } from './Guard/loginprotection.guard';
import { PedidosLojaComponent } from './Page/Admin/pedidos-loja/pedidos-loja.component';
import { PedidosContatoComponent } from './Page/Admin/pedidos-contato/pedidos-contato.component';



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
   },
         {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[loginprotectionGuard]
   },
    {
    path:'homeAdmin',
    component:boasVindasComponent,
    canActivate:[loginprotectionGuard]
   },
   {
    path:'loja',
    component:LojaComponent,
   },
   {
    path:'frete',
    component:FreteComponent,
   },
   {
    path:'compra',
    component:CompraComponent
   },
   {
    path:'boleto',
    component:BoletoComponent
   },
   {
    path:'lancamento',
    component:LancamentoComponent
   },
   {
    path:'contato',
    component:ContatoComponent
   },
   {
    path:'listaLoja',
    component:PedidosLojaComponent
   },
   {
    path:'listaContato',
    component:PedidosContatoComponent
   }

];
