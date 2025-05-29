import { Component } from '@angular/core';
import { BarraLateralComponent } from '../barra-lateral/barra-lateral.component';

@Component({
  selector: 'app-pedidos-contato',
  imports: [BarraLateralComponent],
  templateUrl: './pedidos-contato.component.html',
  styleUrl: './pedidos-contato.component.css'
})
export class PedidosContatoComponent {



  nome:string | null=null
  motivo:string| null=null
  preferencia:string| null=null
  email:string| null=null
  telefone:string| null=null
  comentario:string| null=null


ngOnInit(){


this.nome = localStorage.getItem('nomeContato')
this.motivo = localStorage.getItem('opcaoContato')
this.preferencia = localStorage.getItem('preferenciaContato')
this.email =localStorage.getItem('emailContato')
this.telefone = localStorage.getItem('telefoneContato')
this.comentario = localStorage.getItem('comentarioContato')
  console.log(this.nome);
  console.log(this.preferencia);
  console.log(this.preferencia);
  console.log(this.email);
  console.log(this.telefone);
  
}
}
