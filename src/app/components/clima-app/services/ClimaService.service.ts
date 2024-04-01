import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClimaService {
  key = '43bc2d47eb5035670f1c9a5c4effd0ac';
  url = 'https://api.openweathermap.org/data/2.5/weather?q=';
  constructor(private http: HttpClient) {}
  getClima(ciudad: string): Observable<any> {
    const URL = this.url + ciudad + '&appid=' + this.key;
    console.log(URL);
    return this.http.get(URL);
  }
}
