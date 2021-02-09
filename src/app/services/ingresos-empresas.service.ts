import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IngresosEmpresasService {
  constructor(private http: HttpClient) {}
  getIngresos(): any {
    return this.http.get(
      'http://localhost:3000/api/banco/obtenerIngresosMensuales'
    );
  }
}
