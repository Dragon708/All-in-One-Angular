import { Component, EventEmitter, Output } from '@angular/core';
import { NoticiaService } from './services/noticia.service';
@Component({
  selector: 'app-noticias-api',
  templateUrl: './noticias-api.component.html',
  styleUrls: ['./noticias-api.component.css'],
})
export class NoticiasApiComponent {
  @Output() showAPPNoticiasChange = new EventEmitter<string>();

  cerrar(): void {
    this.showAPPNoticiasChange.emit('empty');
  }

  listNoticias: any[] = [];
  loading = false;

  constructor(private _noticiaService: NoticiaService) {}

  buscarNoticias(parametros: any) {
    this.loading = true;
    this.listNoticias = [];

    setTimeout(() => {
      this._noticiaService.getNoticias(parametros).subscribe(
        (data) => {
          this.loading = false;
          this.listNoticias = data.articles;
          console.log(this.listNoticias)
        },
        (error) => {
          console.log(error);
          this.loading = false;
        }
      );
    }, 1000);
  }
}
