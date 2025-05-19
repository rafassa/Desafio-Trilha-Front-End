import { Component } from '@angular/core';

@Component({
  selector: 'app-display-valor',
  imports: [],
  templateUrl: './display-valor.component.html',
  styleUrl: './display-valor.component.css'
})
export class DisplayValorComponent {

  
valorTransferido:number =0

  ngOnInit() {
  this.valorTransferido = JSON.parse(localStorage.getItem('valorTransferencia') || 'null');
  console.log("chegou como",this.valorTransferido)
}
}
