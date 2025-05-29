import { Component } from '@angular/core';
import { BarraLateralComponent } from '../barra-lateral/barra-lateral.component';

@Component({
  selector: 'app-pedidos-contato',
  imports: [BarraLateralComponent],
  templateUrl: './pedidos-contato.component.html',
  styleUrl: './pedidos-contato.component.css'
})
export class PedidosContatoComponent {
nome:any = localStorage.getItem('nomeContato')
opcao:any = localStorage.getItem('opcapContato')
preferencia:any = localStorage.getItem('preferenciaContato')
email:any =localStorage.getItem('emailContato')
telefone:any = localStorage.getItem('telefonContato')


ngOnInit(){
  console.log(this.nome);
  console.log(this.opcao);
  console.log(this.preferencia);
  console.log(this.email);
  console.log(this.telefone);
  
}
}
