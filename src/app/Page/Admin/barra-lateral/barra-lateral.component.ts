
import { Component, inject } from '@angular/core';
import { RouterLink} from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../../Interface/Usuario.interface';
import { AutenticacaoService } from '../../../services/autenticacao.service';


@Component({
  selector: 'app-barra-lateral',
  imports: [RouterLink, ],
  templateUrl: './barra-lateral.component.html',
  styleUrl: './barra-lateral.component.css'
})
export class BarraLateralComponent {

  
  name:Usuario | null=null

  ngOnInit():void{
    const nomeUsuario = localStorage.getItem('apiUsuarios')
    if(nomeUsuario){
      this.name = JSON.parse(nomeUsuario)
      
    }
  }

  service = inject(AutenticacaoService)

  constructor(private router:Router, private route:ActivatedRoute){}
  logOut(){
    
    this.service.removeStorage()
    this.router.navigateByUrl('')
  }
}
