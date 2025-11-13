import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 menuAberto = false;

  constructor(private router: Router) {}

  toggleMenu() {
    this.menuAberto = !this.menuAberto;
  }

  irParaDashboard() {
    this.menuAberto = false;
    this.router.navigate(['/dashboard']);
  }

  irParaHome() {
    this.menuAberto = false;
    this.router.navigate(['/home']);
  }
  sairConta(): void {
  // Fecha o menu e redireciona para login
  this.menuAberto = false;
  this.router.navigate(['/login']);
 }
}
