import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarouselImage } from '../Interface/CarouselImage.interface';
@Injectable({
  providedIn: 'root'
})
export class CarouselService {

http = inject(HttpClient)
private url= 'https://api-desafio-trilha-front-end.onrender.com/carouselImg'

pegarImagem():Observable<CarouselImage[]>{
return this.http.get<CarouselImage[]>(this.url);
}

}
