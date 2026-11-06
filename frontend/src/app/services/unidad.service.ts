import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UnidadService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  obtenerConteo() {
    return this.http.get(`${this.apiUrl}/conteo`);
  }
  registrarUnidad(tipo: string) {
  return this.http.post(`${this.apiUrl}/registrar`, { tipo });
}
obtenerHistorial() {
  return this.http.get(`${this.apiUrl}/historial`);
}
obtenerHistorialPorFechas(inicio: string, fin: string) {
  return this.http.get(`${this.apiUrl}/historial-fechas?inicio=${inicio}&fin=${fin}`);
}
}