import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [MessageService],
})
export class ListComponent {
  @Input() ListaDeCitas: any;
  @Input() show: any;

  constructor(private messageService: MessageService) {}

  eliminarCita(index: number): void {
    this.ListaDeCitas.splice(index, 1);
  }
}
