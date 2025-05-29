import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contato',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css',
})
export class ContatoComponent {
  formContato = new FormGroup({
    nome: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
    ]),
    sobrenome: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/),
    ]),
    telefone: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
      Validators.pattern('^[0-9]+$'),
    ]),
    preferencia: new FormControl('', [Validators.required]),
    opcao: new FormControl('', [Validators.required]),
    comentario: new FormControl('', [
      Validators.required,
      Validators.minLength(15),
      Validators.maxLength(150),
    ]),
    termoAceito: new FormControl(false, [Validators.requiredTrue]),
  });

  get nome() {
    return this.formContato.get('nome');
  }
  get sobrenome() {
    return this.formContato.get('sobrenome');
  }
  get email() {
    return this.formContato.get('email');
  }
  get telefone() {
    return this.formContato.get('telefone');
  }
  get preferencia() {
    return this.formContato.get('preferencia');
  }
  get opcao() {
    return this.formContato.get('opcao');
  }
  get comentario() {
    return this.formContato.get('comentario');
  }
  get termoAceito() {
    return this.formContato.get('termoAceito');
  }

  pegarInfor() {
    localStorage.setItem('opcaoContato', JSON.stringify(this.opcao?.value));
    localStorage.setItem('preferenciaContato',JSON.stringify(this.preferencia?.value));
    localStorage.setItem('nomeContato', JSON.stringify(this.nome?.value));
    localStorage.setItem('comentarioContato',JSON.stringify(this.comentario?.value));

    if (this.opcao?.value == 'email') {
       localStorage.setItem('emailContato', JSON.stringify(this.email?.value))
    }else{
       localStorage.setItem('telefoneContato', JSON.stringify(this.telefone?.value))
    }
  }
}
