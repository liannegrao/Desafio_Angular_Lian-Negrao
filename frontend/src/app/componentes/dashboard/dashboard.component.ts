import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Veiculo } from '../../models/veiculo.model';
import { CarByVin } from '../../models/carbyvin.model';
import { HttpClientModule } from '@angular/common/http';
import { tap } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('carSelect') carSelect!: ElementRef<HTMLSelectElement>;
  menuAberto = false;
  vehicles: Veiculo[] = [];
  selectedVehicle: Veiculo | null = null;
  filteredVehicles: CarByVin[] = [];
  searchTerm: string = '';


  ngOnInit(): void {
    this.loadVehicles();
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.onSelectVehicle());
  }

  constructor(private apiService: ApiService, private router: Router) { }

  // 🔹 Carrega lista de veículos usando o service
  loadVehicles(): void {
    this.apiService.getVehicles().pipe(tap((vehicles) => (this.vehicles = vehicles))).subscribe({
      next: (vehicles) => {
        console.log('🚗 Veículos carregados:', vehicles);
        // Seleciona o primeiro veículo automaticamente para exibir a imagem
        if (vehicles && vehicles.length > 0) {
          this.selectedVehicle = vehicles[0];
          // Se o select já estiver disponível na view, atualiza seu valor
          try {
            if (this.carSelect && this.carSelect.nativeElement) {
              this.carSelect.nativeElement.value = String(this.selectedVehicle.id);
            }
          } catch (e) {
            // ignore — pode ocorrer antes de ViewChild estar inicializado
          }
        }
      },
      error: (err) => {
        console.error('❌ Erro ao carregar veículos:', err);
        alert('Erro ao buscar veículos! Verifique se o servidor Node está rodando.');
      }
    });
  }

  // 🔹 Seleciona o veículo no select
 onSelectVehicle(): void {
  const select = this.carSelect.nativeElement as HTMLSelectElement;
  const id = Number(select.value);
  this.selectedVehicle = this.vehicles.find(v => v.id === id) || null;
  this.filteredVehicles = [];

  console.log('🚙 Veículo selecionado:', this.selectedVehicle);
}


  // 🔹 Busca dados de um veículo pelo VIN
 filtrarPorVin(): void {
  const term = (this.searchTerm ?? '').trim();

  // 🔹 Se o campo estiver vazio, apenas limpa resultados e não faz nada
  if (!term) {
    this.filteredVehicles = [];
    return; // evita rodar o resto da função
  }

  this.apiService.checkVinCode(term).subscribe({
    next: (response) => {
      this.filteredVehicles = [{
        vin: term,
        odometro: response.odometro,
        nivelCombustivel: response.nivelCombustivel,
        status: response.status,
        lat: response.lat,
        long: response.long
      } as any];
    },
    error: (err) => {
      console.error('❌ Erro ao buscar VIN:', err);
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
