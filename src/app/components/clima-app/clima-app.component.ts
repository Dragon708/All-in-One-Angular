import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-clima-app',
  templateUrl: './clima-app.component.html',
  styleUrls: ['./clima-app.component.css'],
})
export class ClimaAppComponent {
  @Input() CerrarAppClima: any;
  @Input() showAPPClima: any;
  @Output() showAPPClimaChange = new EventEmitter<string>();

  cerrar(): void {
    this.showAPPClimaChange.emit('empty');
  }
}
