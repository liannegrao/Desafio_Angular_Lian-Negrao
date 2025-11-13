import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { Veiculos, VeiculosAPI } from '../models/veiculo.model';
import { CarByVin } from '../models/carbyvin.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly http = inject(HttpClient);

  // Detecta se está em produção (Vercel) ou desenvolvimento
  private get apiURL(): string {
    const isProduction = !window.location.hostname.includes('localhost') &&
                        !window.location.hostname.includes('127.0.0.1');

    return isProduction ? '' : 'http://localhost:3002';
  }

  // 🔹 Login
  login(nome: string, senha: string): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiURL}/login`, { nome, senha });
  }

  // 🔹 Lista de veículos
  getVehicles(): Observable<Veiculos> {
    return this.http
      .get<VeiculosAPI>(`${this.apiURL}/vehicles`)
      .pipe(map((res) => res.vehicles));
  }

  // 🔹 Busca VIN
  checkVinCode(vin: string): Observable<CarByVin> {
    return this.http.post<CarByVin>(`${this.apiURL}/vehicleData`, { vin });
  }
}
