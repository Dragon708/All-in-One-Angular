import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';

import { Cita } from 'src/models/tarea';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css'],
  providers: [MessageService],
})
export class CitasComponent {
  @Input() CerrarApp: any;
  @Input() showAPPCita: any;
  @Output() showAPPCitaChange = new EventEmitter<string>();
  listaDeCitas: Cita[] = [];
  constructor(private messageService: MessageService) {}

  show(message: string, severity: string) {
    this.messageService.add({
      severity: severity,
      summary: 'Success',
      detail: message,
    });
  }

  cerrar(): void {
    this.showAPPCitaChange.emit('empty');
  }
}
