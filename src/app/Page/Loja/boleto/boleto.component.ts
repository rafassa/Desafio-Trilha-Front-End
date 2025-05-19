import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { format } from 'date-fns';
import {jsPDF} from 'jspdf';


@Component({
  selector: 'app-boleto',
  imports: [CommonModule],
  templateUrl: './boleto.component.html',
  styleUrl: './boleto.component.css'
})
export class BoletoComponent {


 
  ngOnInit(){
   this.boletoForm = JSON.parse(localStorage.getItem('boletoValor') || 'null')
   this.valorTransferido = JSON.parse(localStorage.getItem('valorTransferencia') || 'null');
  }

  boletoForm:any
  valorTransferido:number =0


  codigoPagamento:number = 0 
  
    constructor(){
      this.gerarCodigoPagamento();
    }
  
     gerarCodigoPagamento(): void {
      this.codigoPagamento = Math.floor(100000 + Math.random() * 900000);
    }

  gerarPDF() {
      
      const doc = new jsPDF();

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(20);
      doc.text('BANCO XPTO S.A.', 60, 20);

      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');

      // Linha separadora
      doc.line(10, 30, 200, 30);

      // Dados do pagador
      const dados = this.boletoForm  ;
      doc.text('Pagador:', 10, 40);
      doc.text(`Nome: ${dados.nome}`, 10, 50);
      doc.text(`Pagamento: ${dados.pagamento}`, 10, 60);
      doc.text(`Endereço: ${dados.endereco}`, 10, 70);

      // Linha separadora
      doc.line(10, 80, 200, 80);

      // Dados do pagamento
      doc.text('Detalhes do Pagamento:', 10, 90);
      doc.text(`Forma de pagamento: ${dados.pagamento}`, 10, 100);
      doc.text(`Valor: ${this.valorTransferido}`, 10, 110);
      doc.text(`Vencimento: ${format(new Date(), 'dd/MM/yyyy')}`, 10, 120);

      // Linha separadora
      doc.line(10, 130, 200, 130);

      // Código de barras (simulação visual aprimorada)
      doc.setFont('courier', 'bold');
      doc.setFontSize(16);
      doc.text(`Codigo de pagamento: ${this.codigoPagamento}`, 10, 140);

      doc.save('boleto_pagamento.pdf');
    
  }
}
