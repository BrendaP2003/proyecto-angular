import { Component, input } from '@angular/core';
import { Platillo } from '../platillo';

@Component({
  selector: 'app-cardplatillo',
  standalone: true,
  imports: [],
  templateUrl: './cardplatillo.component.html',
  styleUrl: './cardplatillo.component.css'
})
export class CardplatilloComponent {

  platillo = input.required<Platillo>();

}
