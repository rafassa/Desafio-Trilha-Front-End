import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BoletoInfoService } from '../../../services/boleto-info.service';
import { Router } from '@angular/router';
import { PedidosLojaService } from '../../../services/pedidos-loja.service';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-pagamento',
  imports: [ReactiveFormsModule, CommonModule, FormsModule, NgxMaskDirective],
  templateUrl: './pagamento.component.html',
  styleUrl: './pagamento.component.css',
})
export class PagamentoComponent {
  service = inject(BoletoInfoService);
  servicePedidos = inject(PedidosLojaService);
  router = inject(Router);
  constructor() {
    const valorComFreteVer = localStorage.getItem('valorTransferencia');
    if (valorComFreteVer == null) {
      this.router.navigateByUrl('/loja');
    }
  }

  form = new FormGroup({
    nome: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(50),
    ]),
    cpf: new FormControl('', [
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(11),
      Validators.pattern('^[0-9]+$'),
    ]),
    pagamento: new FormControl('', [Validators.required]),
    cartao: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
      Validators.pattern('^[0-9]+$'),
    ]),
    vencimento: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(4),
      Validators.pattern('^[0-9]+$'),
    ]),
    cvv: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
      Validators.pattern('^[0-9]+$'),
    ]),
    endereco: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(50),
    ]),
    termoAceito: new FormControl(false, [Validators.requiredTrue]),
  });

  get nome() {
    return this.form.get('nome');
  }
  get cpf() {
    return this.form.get('cpf');
  }
  get pagamento() {
    return this.form.get('pagamento');
  }
  get cartao() {
    return this.form.get('cartao');
  }
  get vencimento() {
    return this.form.get('vencimento');
  }
  get cvv() {
    return this.form.get('cvv');
  }
  get endereco() {
    return this.form.get('endereco');
  }
  get termoAceito() {
    return this.form.get('termoAceito');
  }

  verificarSelect() {
    const pagamento = this.form.get('pagamento')?.value;

    if (pagamento === 'Dinheiro') {
      this.form.get('cartao')?.disable();
      this.form.get('vencimento')?.disable();
      this.form.get('cvv')?.disable();
    } else {
      this.form.get('cartao')?.enable();
      this.form.get('vencimento')?.enable();
      this.form.get('cvv')?.enable();
    }
  }

  pagar() {
    localStorage.setItem('listaNome', JSON.stringify(this.nome?.value));
    this.servicePedidos.pushLista();
    const valorComFrete = localStorage.getItem('valorTransferencia');
    this.service.pegaInfoBoleto(this.form.value, valorComFrete);
    localStorage.removeItem('produto');
    localStorage.removeItem('valor');
    localStorage.removeItem('valorTransferencia');
    this.router.navigate(['/boleto']);
  }
}
