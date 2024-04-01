import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  position: string = 'bottom';

  showAPP: string = 'empty';
  showAppFuntion(valor: string): void {
    if (this.showAPP === 'empty') {
      this.showAPP = valor;
    } else {
      if (this.showAPP === valor) {
        this.showAPP = 'empty';
      } else {
        this.showAPP = valor;
      }
    }
  }
}
