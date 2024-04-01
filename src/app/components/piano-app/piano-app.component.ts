import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-piano-app',
  templateUrl: './piano-app.component.html',
  styleUrls: ['./piano-app.component.css'],
})
export class PianoAppComponent {
  @Output() showAPPPianoChange = new EventEmitter<string>();

  cerrar(): void {
    this.showAPPPianoChange.emit('empty');
  }
  aplicarSonido(numero: number): void {
    const audio = new Audio();
    audio.src = '../assets/sonidos/note' + numero + '.wav';
    audio.load();
    audio.play();
  }
}
