import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-convert-app',
  templateUrl: './convert-app.component.html',
  styleUrls: ['./convert-app.component.css'],
  providers: [MessageService],
})
export class ConvertAppComponent {
  @Output() showAPPConvertChange = new EventEmitter<string>();

  constructor(private messageService: MessageService) {}

  show(message: string, severity: string) {
    this.messageService.add({
      severity: severity,
      summary: 'Success',
      detail: message,
    });
  }

  cerrar(): void {
    this.showAPPConvertChange.emit('empty');
  }
}
