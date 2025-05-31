import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PesquisaService } from '../../../services/pesquisaLoja.service';

@Component({
  selector: 'app-pesquisa',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './pesquisa.component.html',
  styleUrl: './pesquisa.component.css',
})
export class PesquisaComponent {
  service = inject(PesquisaService);
  pesquisa: FormControl = new FormControl('');
  textoPesquisa: any;

  mudanca(pesquisaValor: string) {
    this.service.updatePesquisa(pesquisaValor);
  }
}
