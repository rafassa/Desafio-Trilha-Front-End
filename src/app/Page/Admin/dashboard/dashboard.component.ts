import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BarraLateralComponent } from '../barra-lateral/barra-lateral.component';
import { PesquisaComponent } from '../pesquisa/pesquisa.component';
import { SelectDashBoardComponent } from '../select-dash-board/select-dash-board.component';
import { SelectService } from '../../../services/select.service';
import { Carro } from '../../../Interface/Carro.interface';
@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    FormsModule,
    BarraLateralComponent,
    PesquisaComponent,
    SelectDashBoardComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  private service = inject(SelectService);

  constructor(private http: HttpClient) {}

  carros: Carro[] | null = null;
  selecionado = 0;
  carSelect: number = 0;

  carroSelecionado() {
    this.service.getApi().subscribe({
      next: (resposta: any) => {
        this.carros = resposta.vehicles;
        console.log(this.carros);

        this.selecionado = this.carSelect;
        console.log(this.selecionado);
      },
    });
  }
}
