import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '../Interface/Data.interface';



@Injectable({
  providedIn: 'root'
})
export class BarraService {

  constructor(private http:HttpClient) { }


  PostSearch(SearchValue:string):Observable<Data[]>{
    const apiUrl="https://api-desafio-trilha-front-end.onrender.com/vehicleData"
    return  this.http.post<Data[]>(apiUrl, { vin:SearchValue})
    
  }

}
