import { Component } from '@angular/core';
import { PesquisaComponent } from '../pesquisa/pesquisa.component';
import { CatalogoComponent } from '../catalogo/catalogo.component';
import { CarrinhoComponent } from '../carrinho/carrinho.component';

@Component({
  selector: 'app-loja',
  imports: [PesquisaComponent, CatalogoComponent, CarrinhoComponent],
  templateUrl: './loja.component.html',
  styleUrl: './loja.component.css'
})
export class LojaComponent {

}
