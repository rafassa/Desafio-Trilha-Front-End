import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  imports: [ReactiveFormsModule,],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
formContato = new FormGroup({
  nome: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]),
  sobrenome: new FormControl ('', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]),
  cpf: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern('^[0-9]+$')]),
  email: new FormControl('', [ Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]),
  telefone:  new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern('^[0-9]+$')]),
  preferencia: new FormControl('', [Validators.required]),
  termoAceito: new FormControl(false, [Validators.requiredTrue])

})

get nome(){
    return this.formContato.get('nome')
  }
  get sobrenome(){
    return this.formContato.get('sobrenome')
  }
  get cpf(){
    return this.formContato.get('cpf')
  }
  get email(){
    return this.formContato.get('email')
  }
  get telefone(){
    return this.formContato.get('telefone')
  }
  get preferencia(){
    return this.formContato.get('preferencia')
  }
   get termoAceito(){
 return this.formContato.get('termoAceito')
  }

}
