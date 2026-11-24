import { Component } from '@angular/core';
import { Platillo } from '../platillo';
import { CategoriaPlatillos } from '../platillo';
import { PlatilloService } from '../platillo.service';
import { CardplatilloComponent } from '../Components/cardplatillo/cardplatillo.component';

@Component({
  selector: 'app-menu-cominachina',
  standalone: true,
  imports: [CardplatilloComponent],
  templateUrl: './menu-cominachina.component.html',
  styleUrl: './menu-cominachina.component.css'
})
export class MenuCominachinaComponent {

 // Aquí guardaremos solamente los platillos de comida china
  comidachina: CategoriaPlatillos[] = [];

  constructor(
    private platilloService: PlatilloService
  ) {

    // Obtenemos los platillos cuyo tipo sea "Comida China"
    this.comidachina = 
        this.platilloService.obtenerCategorias('Comida China');


    // Ordenar categorías solamente para Comida China
  this.comidachina.sort((a, b) => {

    if (a.nombre === 'Comida China') return -1;
    if (b.nombre === 'Comida China') return 1;

    return 0;

  });

  }
     

}
