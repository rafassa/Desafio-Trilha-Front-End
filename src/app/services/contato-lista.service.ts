import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContatoListaService {
  //  localStorage.getItem('motivoContato');
  //     localStorage.setItem('preferenciaContato',JSON.stringify(this.preferencia?.value));
  //     localStorage.setItem('nomeContato', JSON.stringify(this.nome?.value));
  //     localStorage.setItem('comentarioContato',JSON.stringify(this.comentario?.value));

  motivoContato: string = '';
  preferenciaContato: string = '';
  nomeContato: string = '';
  comentarioContato: string = '';
  emailContato: string = '';
  telefoneContato: string = '';
  private listaContato: {
    motivo: string;
    preferencia: string;
    nome: string;
    comentario: string;
    email: string;
    telefone: string;
  }[] = [];
  pushLista() {
    const motivo = localStorage.getItem('motivoContato');
    const preferencia = localStorage.getItem('preferenciaContato');
    const nome = localStorage.getItem('nomeContato');
    const comentario = localStorage.getItem('comentarioContato');
    const email = localStorage.getItem('emailContato');
    const telefone = localStorage.getItem('telefoneContato');

    if (motivo && preferencia && nome && comentario && email && telefone) {
      this.motivoContato = JSON.parse(motivo);
      this.preferenciaContato = JSON.parse(preferencia);
      this.nomeContato = JSON.parse(nome);
      this.comentarioContato = JSON.parse(comentario);
      this.emailContato = JSON.parse(email);
      this.telefoneContato = JSON.parse(telefone);
    }
    const novoItem = {
      motivo: this.motivoContato,
      preferencia: this.preferenciaContato,
      nome: this.nomeContato,
      comentario: this.comentarioContato,
      email: this.emailContato,
      telefone: this.telefoneContato,
    };
    this.recuperarLista();
    this.listaContato.push(novoItem);
    localStorage.setItem(
      'arrayPedidosContato',
      JSON.stringify(this.listaContato),
    );
  }

  recuperarLista() {
    const dados = localStorage.getItem('arrayPedidosContato');
    if (dados) {
      this.listaContato = JSON.parse(dados);
    }
  }
}
