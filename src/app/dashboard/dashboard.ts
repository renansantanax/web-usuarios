import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  router = inject(Router);

  nomeUsuario = signal<string>('');
  emailUsuario = signal<string>('');

  //Função reservada que é executada quando
  //o componente é inicializado
  ngOnInit() {
    //Ler os dados do usuário que estão salvos na sessão do navegador
    const dados = sessionStorage.getItem('usuario') ?? '';
    const data = JSON.parse(dados);

    this.nomeUsuario.set(data.usuario.nome);
    this.emailUsuario.set(data.usuario.email);
  }
  logout() {
    sessionStorage.removeItem('usuario');
    this.router.navigate(['/pages/login']);
  }
}
