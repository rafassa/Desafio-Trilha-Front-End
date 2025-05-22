import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { BarraLateralComponent } from '../barra-lateral/barra-lateral.component';
import { Usuario } from '../../../Interface/Usuario.interface';
import { AutenticacaoService } from '../../../services/autenticacao.service';





@Component({
  selector: 'app-boas-vindas',
  imports: [BarraLateralComponent],
  templateUrl: './boas-vindas.component.html',
  styleUrl: './boas-vindas.component.css'
})
export class boasVindasComponent {


  name:Usuario | null=null

  ngOnInit():void{
    const nomeUsuario = sessionStorage.getItem('apiUsuarios')
    if(nomeUsuario){
      this.name = JSON.parse(nomeUsuario)
      
    }else{
      this.router.navigateByUrl('/login')
    }


    
  }

  service = inject(AutenticacaoService)

  constructor(private router:Router, private route:ActivatedRoute){}
  

}
