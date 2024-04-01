import { Component, Input, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Cita } from 'src/models/tarea';

@Component({
  selector: 'app-inputCita',
  templateUrl: './inputCita.component.html',
  styleUrls: ['./inputCita.component.css'],
  providers: [MessageService],
})
export class InputCitaComponent implements OnInit {
  @Input() ListaDeCitas: any;
  @Input() show: any;

  formgroup: FormGroup;

  constructor(private messageService: MessageService) {
    this.formgroup = new FormGroup({
      citaCtrl: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
      fechaCtrl: new FormControl('', [Validators.required]),
      horaCtrl: new FormControl('', [Validators.required]),
      sintomaCtrl: new FormControl('', []),
    });
  }

  ngOnInit(): void {}

  agregarCita($event: Event) {
    $event.preventDefault();
    console.log(this.formgroup);
    console.log(this.formgroup.controls['citaCtrl']);

    // ;

    this.ListaDeCitas.push(
      new Cita(
        this.formgroup.controls['citaCtrl'].value,
        this.formgroup.controls['fechaCtrl'].value,
        this.formgroup.controls['horaCtrl'].value,
        this.formgroup.controls['sintomaCtrl'].value
      )
    );
    this.formgroup.reset();
  }
}
