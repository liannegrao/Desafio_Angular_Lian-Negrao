import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
  erro: string = '';
  mostrarSenha: boolean = false; // ✅ variável usada no HTML

  constructor(private router: Router) {}

  toggleSenha() {
    this.mostrarSenha = !this.mostrarSenha; // ✅ troca o tipo da senha
  }
  entrar() {
    // Captura os valores dos inputs diretamente do DOM (já que o HTML não pode mudar)
    const emailInput = document.querySelector('input[type="email"]') as HTMLInputElement;
    const senhaInput = document.querySelector('input[placeholder="Insira sua senha"]') as HTMLInputElement;

    const email = emailInput?.value.trim();
    const senha = senhaInput?.value.trim();

    if (email === 'admin@ford.com' && senha === '1234') {
      this.erro = '';
      this.router.navigate(['/home']);
    } else {
      this.erro = 'E-mail ou senha inválidos.';
      alert(this.erro);
    }
  }
}
