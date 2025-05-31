import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { ContatoListaService } from '../../../services/contato-lista.service';
@Component({
  selector: 'app-contato',
  imports: [ReactiveFormsModule, CommonModule, NgxMaskDirective],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css',
})
export class ContatoComponent {
  service = inject(ContatoListaService);
  mostrarPopup = false;
  formContato = new FormGroup({
    nome: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(50),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/),
    ]),
    telefone: new FormControl('', [
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(20),
      Validators.pattern('^[0-9]+$'),
    ]),
    preferencia: new FormControl('', [Validators.required]),
    motivo: new FormControl('', [Validators.required]),
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
  get email() {
    return this.formContato.get('email');
  }
  get telefone() {
    return this.formContato.get('telefone');
  }
  get preferencia() {
    return this.formContato.get('preferencia');
  }
  get motivo() {
    return this.formContato.get('motivo');
  }
  get comentario() {
    return this.formContato.get('comentario');
  }
  get termoAceito() {
    return this.formContato.get('termoAceito');
  }

  pegarInfor() {
    localStorage.setItem('motivoContato', JSON.stringify(this.motivo?.value));
    localStorage.setItem(
      'preferenciaContato',
      JSON.stringify(this.preferencia?.value),
    );
    localStorage.setItem('nomeContato', JSON.stringify(this.nome?.value));
    localStorage.setItem(
      'comentarioContato',
      JSON.stringify(this.comentario?.value),
    );
    localStorage.setItem('emailContato', JSON.stringify(this.email?.value));
    localStorage.setItem(
      'telefoneContato',
      JSON.stringify(this.telefone?.value),
    );
    this.service.pushLista();
    this.formContato.reset();
    this.mostrarPopup = true;
  }

  fecharPopup() {
    this.mostrarPopup = false;
  }
}
