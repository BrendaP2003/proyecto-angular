import { Component, input } from '@angular/core';

@Component({
  selector: 'app-cardvalores',
  standalone: true,
  imports: [],
  templateUrl: './cardvalores.component.html',
  styleUrl: './cardvalores.component.css'
})
export class CardvaloresComponent {

  titulo = input.required<string>();

  imagen = input.required<string>();


  valores = input.required<string[]>();

  

}
