import { Component } from '@angular/core';
import { BarraLateralComponent } from '../barra-lateral/barra-lateral.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pedidos-contato',
  imports: [BarraLateralComponent, CommonModule],
  templateUrl: './pedidos-contato.component.html',
  styleUrl: './pedidos-contato.component.css',
})
export class PedidosContatoComponent {
  listaContato: {
    motivo: string;
    preferencia: string;
    nome: string;
    comentario: string;
    email: string;
    telefone: string;
  }[] = [];

  ngOnInit() {
    const dados = localStorage.getItem('arrayPedidosContato');
    if (dados) {
      this.listaContato = JSON.parse(dados);
    }
  }

  removerContato(index: number) {
    this.listaContato.splice(index, 1);

    localStorage.setItem(
      'arrayPedidosContato',
      JSON.stringify(this.listaContato),
    );
  }
}
