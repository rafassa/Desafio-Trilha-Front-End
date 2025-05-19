import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { catchError, debounceTime,  filter, switchMap, of} from 'rxjs';
import { Data } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BarraService } from '../../../services/barra.service';

@Component({
  selector: 'app-pesquisa',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './pesquisa.component.html',
  styleUrl: './pesquisa.component.css'
})
export class PesquisaComponent {
  service = inject(BarraService)
pesquisaControl: FormControl = new FormControl("");
dataList:Data[]| null=null
mensagemDeErro: string | null=null

constructor(){
  this.pesquisaControl.valueChanges.pipe(
    debounceTime(500),
    filter((search:string)=> search.trim().length> 19),
    switchMap(search => this.service.PostSearch(search).pipe(
      catchError(()=>{
        this.mensagemDeErro = "VIN não encontrado";
        this.dataList = null; 
        return of(null);
      })
    ))
  ).subscribe({
    next: (res:any) =>{
      if(res){
    this.dataList = Array.isArray(res) ? res : [res]
    this.mensagemDeErro = null 
  }
  }
  })
}
}
