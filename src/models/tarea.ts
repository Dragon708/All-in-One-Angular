export class Cita {
  nombre: string;
  fecha: string;
  hora: string;
  sintomas: string;

  constructor(nombre: string, fecha: string, hora: string, sintomas: string) {
    (this.nombre = nombre),
      (this.fecha = fecha),
      (this.hora = hora),
      (this.sintomas = sintomas);
  }
}
