import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carro-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './carro-login.component.html',
  styleUrl: './carro-login.component.css'
})
export class CarroLoginComponent {
  telaRecuperacao = false; 
  titulo = 'Faça seu Login!';
  login = '';
  senha = '';
  email = '';
  botaoDesabilitado = false; 

  constructor(private router: Router) { }

  onBotaoClicado() {
    console.log('Botão clicado!'); 

    if (this.telaRecuperacao) {
      this.enviarRecuperacao();
    } else {
      this.fazerLogin();
    }
  }

  fazerLogin() {
    console.log('Tentando fazer login...', this.login, this.senha);

    if (this.login.trim() === '' || this.senha.trim() === '') {
      alert('Preencha ambos os campos!');
      return;
    }

    this.botaoDesabilitado = true;

    setTimeout(() => {
      if (this.login === 'administrador@infinity.com' && this.senha === 'admin') {
        alert(`Bem-vindo ${this.login}!`);
        this.router.navigate(['/carros']);
      } else if (this.login === 'cliente@infinity.com' && this.senha === 'cliente') {
        alert(`Bem-vindo ${this.login}!`);
        this.router.navigate(['']);
      } else {
        alert('Dados Inválidos');
      }
      
      this.botaoDesabilitado = false;
    }, 500);
  }

  enviarRecuperacao() {
    console.log('Enviando recuperação para:', this.email);

    if (this.email.trim() === '') {
      alert('Digite seu email!');
      return;
    }

    this.botaoDesabilitado = true;

    setTimeout(() => {
      alert('Link de recuperação enviado para seu email!');
      this.botaoDesabilitado = false;
      this.telaRecuperacao = false; 
      this.email = '';
    }, 1000);
  }

  voltarLogin() {
    this.telaRecuperacao = false;
    this.email = '';
  }

  esqueceuSenha() {
    this.telaRecuperacao = true;
  }

  criarConta() {
    console.log('Criar conta clicado');
  }

  get podeEnviar(): boolean {
    if (this.telaRecuperacao) {
      return this.email.trim().length > 0 && !this.botaoDesabilitado;
    }
    return this.login.trim().length > 0 && 
           this.senha.trim().length > 0 && 
           !this.botaoDesabilitado;
  }
}