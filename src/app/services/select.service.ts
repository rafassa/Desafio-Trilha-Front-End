import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carro } from '../Interface/Carro.interface';


@Injectable({
  providedIn: 'root'
})
export class SelectService {

  constructor(private http:HttpClient){}


  getApi():Observable<Carro[]>{
    const apiUrl="https://api-desafio-trilha-front-end.onrender.com/vehicles"
    return  this.http.get<Carro[]>(apiUrl)
  }


  
}
