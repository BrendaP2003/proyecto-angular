import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  menu = [
    {
      nombre: 'Home',
      icono: '/access/icons.svg',
      ruta: '/'
    },
       {
      nombre: 'Menú',
      icono: '/access/icono2.svg',
      ruta: '/menu'
    },
    {
      nombre: 'Sobre Nosotros',
      icono: '/access/icono2.svg',
      ruta: '/sobrenosotros'
    },
    {
      nombre: 'Contactanos',
      icono: '/access/icono3.svg',
      ruta: '/contactanos'
    }
  ];

}