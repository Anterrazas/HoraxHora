import { Component, OnInit } from '@angular/core';
import { UnidadService } from './services/unidad.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  buenas: number = 0;
  malas: number = 0;
  historial: any[] = [];
  
  fechaInicio: string = '';
  fechaFin: string = '';

  constructor(private unidadService: UnidadService) {}

  ngOnInit() {
    this.actualizarConteo();
    this.cargarHistorial();
  }

  actualizarConteo() {
    this.unidadService.obtenerConteo().subscribe((data: any) => {
      this.buenas = data.buenas || 0;
      this.malas = data.malas || 0;
    });
  }
  registrar(tipo: string) {
    this.unidadService.registrarUnidad(tipo).subscribe(() => {
      // Actualizamos el conteo y recargamos el historial automáticamente al registrar
      this.actualizarConteo();
      this.cargarHistorial();
    });
  }

  cargarHistorial() {
    this.unidadService.obtenerHistorial().subscribe((data: any) => {
      this.historial = data;
    });
  }

  filtrarHistorial() {
    this.unidadService.obtenerHistorialPorFechas(this.fechaInicio, this.fechaFin)
      .subscribe((data: any) => {
        this.historial = data;
      });
  }
}
