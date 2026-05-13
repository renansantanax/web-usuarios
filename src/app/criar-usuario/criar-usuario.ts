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
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-criar-usuario',
  imports: [FormsModule, ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './criar-usuario.html',
  styleUrl: './criar-usuario.css',
})
export class CriarUsuario {
  //Inicializar o HttpClient
  http = inject(HttpClient);

  //Atributos so tipo Signal para guardar mensagens
  msgSucesso = signal<string>('');
  msgErro = signal<string>('');

  //Criando o formulário
  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
    senhaConfirmacao: new FormControl('', [Validators.required]),
  });

  //Função para capturar o evento de submit do formulário
  criarUsuario() {
    //Limpar as variáveis de mensagens
    this.msgSucesso.set('');
    this.msgErro.set('');

    //Fazendo uma requisição HTTP POST para a API
    this.http.post('http://localhost:3000/api/usuarios', this.formCadastro.value).subscribe({
      next: (data: any) => {
        //Capturando a resposta de sucesso
        this.msgSucesso.set(data.mensagem); //Capturando a mensagem
        this.formCadastro.reset(); //limpar o formulário
      },
      error: (e) => {
        //Capturando a resposta de erro
        this.msgErro.set(e.error.erro);
      },
    });
  }
}
