import { Component } from '@angular/core';
import { CardComponent } from '../Components/card/card.component';
import { Restaurante } from '../restaurante';
import { PromoCardComponentComponent } from '../Components/promo-card-component/promo-card-component.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CardComponent, PromoCardComponentComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   restaurantes: Restaurante[] = [
    {
      nombre: 'La Casa del Sabor',
      imagen: 'access/retaurante1.webp',
      tipo: 'Comida mexicana',
      ciudad: 'Guamúchil'
    },
    {
      nombre: 'El Sazón',
      imagen: 'access/restaurante2.webp',
      tipo: 'Comida regional',
      ciudad: 'Los Mochis'
    },
    {
      nombre: 'La Terraza',
      imagen: 'access/restaurante3.webp',
      tipo: 'Cocina internacional',
      ciudad: 'Culiacán'
    }
  ];
}