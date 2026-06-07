import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  //Inicializar o HttpClient
  http = inject(HttpClient);

  router = inject(Router);

  //Mensagem
  msgErro = signal<string>('');

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
      next: (data: any) => {
        sessionStorage.setItem('usuario', JSON.stringify(data));
        this.router.navigate(['admin/dashboard']);
      },
      error: (e) => {
        this.msgErro.set(e.error.erro);
      },
    });
  }
}
