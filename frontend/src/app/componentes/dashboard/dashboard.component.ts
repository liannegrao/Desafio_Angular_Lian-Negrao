import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Veiculo } from '../../models/veiculo.model';
import { CarByVin } from '../../models/carbyvin.model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  menuAberto = false;
  vehicles: Veiculo[] = [];
  selectedVehicle: Veiculo | null = null;
  filteredVehicles: CarByVin[] = [];
  searchTerm: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.loadVehicles();
  }

  // 🔹 Carrega lista de veículos usando o service
  loadVehicles(): void {
    this.apiService.getVehicles().subscribe({
      next: (vehicles) => {
        this.vehicles = vehicles;
        console.log('🚗 Veículos carregados:', vehicles);
      },
      error: (err) => {
        console.error('❌ Erro ao carregar veículos:', err);
        alert('Erro ao buscar veículos! Verifique se o servidor Node está rodando.');
      }
    });
  }

  // 🔹 Seleciona o veículo no select
 onSelectVehicle(event: Event): void {
  const select = event.target as HTMLSelectElement;
  const id = Number(select.value);
  this.selectedVehicle = this.vehicles.find(v => v.id === id) || null;
  this.filteredVehicles = [];

  console.log('🚙 Veículo selecionado:', this.selectedVehicle);
}


  // 🔹 Busca dados de um veículo pelo VIN
  filtrarPorVin(): void {
    if (!this.searchTerm.trim()) {
      alert('Digite um código VIN para buscar!');
      return;
    }

    this.apiService.checkVinCode(this.searchTerm).subscribe({
      next: (response) => {
        this.filteredVehicles = [{
          vin: this.searchTerm,
          odometer: response.odometro,
          fuelLevel: response.nivelCombustivel,
          status: response.status,
          lat: response.lat,
          long: response.long
        } as any];
      },
      error: (err) => {
        console.error('❌ Erro ao buscar VIN:', err);
        alert('Código VIN não encontrado!');
        this.filteredVehicles = [];
      }
    });
  }

  // 🔹 Menu lateral
  toggleMenu(): void {
    this.menuAberto = !this.menuAberto;
  }

  irParaDashboard(): void {
    this.menuAberto = false;
    this.router.navigate(['/dashboard']);
  }

  irParaHome(): void {
    this.menuAberto = false;
    this.router.navigate(['/home']);
  }
}
