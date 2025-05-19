import { Component, inject } from '@angular/core';
import { CarouselImage } from '../../../Interface/CarouselImage.interface';
import { CarouselService } from '../../../services/carousel.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

service = inject(CarouselService)


imagens:CarouselImage[]=[]
index=0
intervalo:any



ngOnInit(){
  this.service.pegarImagem().subscribe((data)=>{
    this.imagens = data
    this.autoPassar()
  })
}


 prevImage() {
    this.index = (this.index - 1 + this.imagens.length) % this.imagens.length;
    this.resetarPassar()
  }

  nextImage() {
    this.index = (this.index + 1) % this.imagens.length;
    this.resetarPassar()
  }

  autoPassar(){
    this.intervalo = setInterval(() => {
      this.nextImage()
    }, 2000);
  }

  resetarPassar(){
    clearInterval(this.intervalo)
    this.autoPassar()
  }


  ngOnDestroy(){
    clearInterval(this.intervalo)
  }
}
