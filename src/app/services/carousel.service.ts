import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarouselImage } from '../Interface/CarouselImage.interface';
@Injectable({
  providedIn: 'root'
})
export class CarouselService {

http = inject(HttpClient)
private url= 'http://localhost:3000/carouselImg'

pegarImagem():Observable<CarouselImage[]>{
return this.http.get<CarouselImage[]>(this.url);
}

}
