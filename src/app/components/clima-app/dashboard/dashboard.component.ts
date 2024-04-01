import { Component } from '@angular/core';
import { ClimaService } from '../services/ClimaService.service';
import { FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [MessageService],
})
export class DashboardComponent {
  isloading: boolean = false;
  country: string = '';
  Nombre: string = '';
  Descripcion: string = '';
  Humedad: string = '';
  Viento: string = '';
  Temperatura: string = '';

  constructor(
    private _climaService: ClimaService,
    private messageService: MessageService
  ) {}
  show() {
    this.messageService.add({
      severity: 'error',
      summary: 'No Encontrada',
      detail: 'Ciudad No Encontrada',
    });
  }
  obtenerClima() {
    this.isloading = true;
    this._climaService.getClima(this.country).subscribe(
      (data) => {
        console.log(data);
        this.Nombre = data.name;
        this.Descripcion = data.weather[0].description;
        this.Humedad = data.main.humidity;
        this.Viento = data.wind.speed;
        this.Temperatura = (data.main.temp - 273).toFixed(1).toString() + '°C';
        this.isloading = false;
      },
      (error) => {
        this.show();
        console.log(error);
        this.isloading = false;
      }
    );
  }
}
