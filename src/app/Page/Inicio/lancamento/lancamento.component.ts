import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  NgModel,
} from '@angular/forms';
import { Lancamento } from '../../../Interface/Lancamento.interface';
import { TableCarroService } from '../../../services/table-carro.service';

@Component({
  selector: 'app-lacamento',
  imports: [FormsModule, CommonModule, FormsModule],
  templateUrl: './lancamento.component.html',
  styleUrl: './lancamento.component.css',
})
export class LancamentoComponent {
  lancamentoCarros: Lancamento[] | null = null;
  arrayCarroSelecionado: Lancamento[] = [];

  service = inject(TableCarroService);
  constructor() {}

  ngOnInit() {
    this.service.getApi().subscribe((data) => {
      this.lancamentoCarros = data;
    });
  }

  carroSelecionado(carro: Lancamento, evento: Event) {
    const checkbox = evento.target as HTMLInputElement;
    if (checkbox && checkbox.checked) {
      this.arrayCarroSelecionado.push(carro);
    } else {
      this.arrayCarroSelecionado = this.arrayCarroSelecionado.filter(
        (item) => item !== carro,
      );
    }
  }

  checkboxFalsa(carro: Lancamento) {
    return (
      !this.arrayCarroSelecionado.includes(carro) &&
      this.arrayCarroSelecionado.length >= 2
    );
  }
}
