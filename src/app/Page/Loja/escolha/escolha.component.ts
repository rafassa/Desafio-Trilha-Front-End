import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FreteService } from '../../../services/Frete.service';
import { CommonModule } from '@angular/common';
import { ComprarService } from '../../../services/comprar.service';
import { Mercado } from '../../../Interface/Mercado.interface';



@Component({
  selector: 'app-escolha',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escolha.component.html',
  styleUrl: './escolha.component.css'
})
export class EscolhaComponent {
  route = inject(ActivatedRoute);
  service = inject(FreteService);
  router = inject(Router)
  serviceCarrinho = inject(ComprarService)
  valor: number = 0;
  mercadoSelecionado: string = '';
  valorSalvo:number = 0
  valorSelecionado:number = 0

  resultados: { mercado: string; valorFinal: number; }[] = [];

  ngOnInit() {
      const ValorInicio = localStorage.getItem('valor')
      this.valor = ValorInicio ? JSON.parse(ValorInicio): null
      console.log(this.valor)

      this.service.getFrete().subscribe((mercados: Mercado[]) => {
        this.resultados = mercados.map(mercado => ({
          mercado: mercado.nome,
          valorFinal: +(this.valor * mercado.multiplicador).toFixed(0)
        }));
      });
    };
  


    pagar(){
      this.service.salvarValor(this.valorSelecionado)
      this.router.navigate(['/compra'])
    }


    pegarResultado(valor:any){
      this.valorSelecionado = valor
     
    }
  }


