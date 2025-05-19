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
    const apiUrl="http://localhost:3000/vehicles"
    return  this.http.get<Carro[]>(apiUrl)
  }


  
}
