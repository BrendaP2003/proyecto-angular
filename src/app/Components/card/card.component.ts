import { Component, input, } from '@angular/core';
import { Restaurante } from '../../restaurante';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  
restaurante = input.required<Restaurante>();
 invertida = input(false);


}
