import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, NgModel } from '@angular/forms';
import { Lancamento } from '../../../Interface/Lancamento.interface';
import { TableCarroService } from '../../../services/table-carro.service';

@Component({
  selector: 'app-lacamento',
  imports: [FormsModule, CommonModule],
  templateUrl: './lancamento.component.html',
  styleUrl: './lancamento.component.css'
})
export class LancamentoComponent {
  
  carForm: FormGroup;
  selectedCars: any[] = [];
  showPopup = false;
  lancamentoCarros: Lancamento[] | null=null


  service = inject(TableCarroService)
  constructor(private fb: FormBuilder) {
    this.carForm = this.fb.group({
      selectedCars: this.fb.array([])
      
    });
  }



  ngOnInit(){
    this.service.getApi().subscribe((data)=>{
      this.lancamentoCarros = data
    })
    
  }

  mudou(event: any, car: any) {
    const selectedCarsArray = this.carForm.get('selectedCars') as FormArray;
    if (event.target.checked) {
      selectedCarsArray.push(this.fb.control(car));
    } else {
      const index = selectedCarsArray.controls.findIndex(ctrl => ctrl.value.id === car.id);
      selectedCarsArray.removeAt(index);
    }

    
    if (selectedCarsArray.length === 2) {
      this.selectedCars = selectedCarsArray.value;
      this.showPopup = true;
    } else {
      this.showPopup = false;
    }
  }
  }
  

