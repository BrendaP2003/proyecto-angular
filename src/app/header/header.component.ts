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
      nombre: 'Contacto',
      icono: '/access/icono2.svg',
      ruta: '/contacto'
    },
    {
      nombre: 'Empleados',
      icono: '/access/icono3.svg',
      ruta: '/empleados'
    }
  ];

}