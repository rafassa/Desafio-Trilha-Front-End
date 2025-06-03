import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../../../services/autenticacao.service';
import { Usuario } from '../../../Interface/Usuario.interface';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private service: AutenticacaoService,
    private router: Router,
  ) {}
  mensagemDeErro: string | null = null;
  isChecked = false;
  checkboxVar:boolean = false
  loginRapidoChecagem = ''
  ngOnInit() {
    const checkbox = localStorage.getItem('valorcheck');
    const loginSession = sessionStorage.getItem('valorDataRapida')
    if (checkbox && loginSession) {
      this.checkboxVar = JSON.parse(checkbox);
    }

   if (this.checkboxVar === true || loginSession) {
    this.router.navigateByUrl('/homeAdmin');
  } 
    
  }

  addUser(user: Usuario[]) {
    console.log(user);
    this.service.postAPI(user).subscribe({
      next: (data: Usuario[]) => {
        this.router.navigateByUrl('/homeAdmin');
        this.service.getApiInformation(data);
        this.service.pegarValorCheck(this.isChecked, data);
      },
      error: (error) => {
        this.mensagemDeErro = error.error.message;
      },
    });
  }
}
