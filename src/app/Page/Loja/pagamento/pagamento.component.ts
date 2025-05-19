import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BoletoInfoService } from '../../../services/boleto-info.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pagamento',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './pagamento.component.html',
  styleUrl: './pagamento.component.css'
})
export class PagamentoComponent {

  service = inject(BoletoInfoService)
  router = inject(Router)
  
  
  
  form = new FormGroup({
  nome: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]),
  cpf: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern('^[0-9]+$')]),
  pagamento: new FormControl('', [Validators.required]),
  cartao: new FormControl('', [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern('^[0-9]+$')]),
  vencimento: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern('^[0-9]+$')]),
  cvv: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern('^[0-9]+$')]),
  endereco: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(50)])
});


  
  
  get nome(){
    return this.form.get('nome')
  }
  get cpf(){
    return this.form.get('cpf')
  }
  get pagamento(){
    return this.form.get('pagamento')
  }
  get cartao(){
    return this.form.get('cartao')
  }
  get vencimento(){
    return this.form.get('vencimento')
  }
  get cvv(){
    return this.form.get('cvv')
  }
  get endereco(){
    return this.form.get('endereco')
  }


  verificarSelect(){
    const pagamento = this.form.get('pagamento')?.value


    if(pagamento === 'Dinheiro'){
       this.form.get('cartao')?.disable();
    this.form.get('vencimento')?.disable();
    this.form.get('cvv')?.disable();
    }
    else{
          this.form.get('cartao')?.enable();
    this.form.get('vencimento')?.enable();
    this.form.get('cvv')?.enable();
    }
  }
  

pagar(){
  
  this.service.pegaInfoBoleto(this.form.value)
  localStorage.removeItem("produto"); // Remove os produtos antigos
  this.router.navigate(['/boleto'])
}

    

}

