import { Component, input } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  standalone: true,
  imports: [],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.css'
})
export class ContactCardComponent {

    titulo = input.required<string>();
  texto = input.required<string>();
  icono = input<string>('');
  enlace = input<string>('');
  textoEnlace = input<string>('');


}
