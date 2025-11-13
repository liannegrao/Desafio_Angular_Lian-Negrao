import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  senha: string = '';
  lembrar: boolean = false;
  mostrarSenha: boolean = false;
  mostrarMensagem: boolean = false;
  mensagemSucesso: boolean = false;
  mensagemTexto: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  toggleSenha() {
    this.mostrarSenha = !this.mostrarSenha;
  }

  entrar() {
    const email = this.email.trim();
    const senha = this.senha.trim();

    if (email === 'admin' && senha === '1234') {
      this.mensagemSucesso = true;
      this.mensagemTexto = 'Login realizado com sucesso!';
      this.mostrarMensagem = true;

      // Redirecionar após um pequeno delay para mostrar a mensagem
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 1500);
    } else {
      this.mensagemSucesso = false;
      this.mensagemTexto = 'Username ou senha inválido.';
      this.mostrarMensagem = true;
    }
  }
}
