import { Component, input } from '@angular/core';

@Component({
  selector: 'app-promo-card-component',
  standalone: true,
  imports: [],
  templateUrl: './promo-card-component.component.html',
  styleUrl: './promo-card-component.component.css'
})
export class PromoCardComponentComponent {
   titulo = input.required<string>();

  texto = input.required<string>();

  imagen = input.required<string>();

  textoBoton = input<string>('Conocer más');


}
