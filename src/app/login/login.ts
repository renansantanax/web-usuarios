import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  //Inicializar o HttpClient
  http = inject(HttpClient);

  //Criando o formulário
  formLogin = new FormGroup({
    email: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
  });

  //Função para capturar o evento de submit do formulário
  autenticar() {
    //Fazendo uma req HTTP POST para a API
    this.http.post('http://localhost:3000/api/auth/login', this.formLogin.value).subscribe({
      //capturando o retorno da API
      next: (data) => {
        console.log(data);
      },
      error: (e) => {
        console.log(e.error);
      },
    });
  }
}
