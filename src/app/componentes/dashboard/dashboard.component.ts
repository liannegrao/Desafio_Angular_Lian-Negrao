import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
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
}
