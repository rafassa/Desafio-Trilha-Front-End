import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BoletoInfoService } from '../../../services/boleto-info.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pagamento',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './pagamento.component.html',
  styleUrl: './pagamento.component.css'
})
export class PagamentoComponent {

  service = inject(BoletoInfoService)
  router = inject(Router)
constructor(){
  const valorComFreteVer = localStorage.getItem('valorTransferencia')
  if(valorComFreteVer == null){
    this.router.navigateByUrl('/loja')
  }
}
  
  
  form = new FormGroup({
  nome: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]),
  cpf: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern('^[0-9]+$')]),
  pagamento: new FormControl('', [Validators.required]),
  cartao: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern('^[0-9]+$')]),
  vencimento: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern('^[0-9]+$')]),
  cvv: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern('^[0-9]+$')]),
  endereco: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]),
  termoAceito:  new FormControl(false, [Validators.requiredTrue])
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
  get termoAceito(){
 return this.form.get('termoAceito')
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
  const valorComFrete = localStorage.getItem('valorTransferencia')
  const valorLista = localStorage.getItem('valoresLista')
  const itemLista = localStorage.getItem('produtoLista')
  this.service.pegaInfoBoleto(this.form.value, valorComFrete)
  localStorage.removeItem("produto");
  localStorage.removeItem("valor");
  localStorage.removeItem("valorTransferencia"); 
  localStorage.setItem('valorLista', JSON.stringify(valorLista))
  localStorage.setItem('itemLista', JSON.stringify(itemLista))
  localStorage.setItem('nomePedido', JSON.stringify(this.nome?.value))
  this.router.navigate(['/boleto'])
}

    

}

