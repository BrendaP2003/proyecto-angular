import { Component, input } from '@angular/core';

@Component({
  selector: 'app-cardinfhistoria',
  standalone: true,
  imports: [],
  templateUrl: './cardinfhistoria.component.html',
  styleUrl: './cardinfhistoria.component.css'
})
export class CardinfhistoriaComponent {

  titulo = input.required<string>();

  imagen = input.required<string>();

  texto = input.required<string>();

}
