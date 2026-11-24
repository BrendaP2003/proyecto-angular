import { Component } from '@angular/core';
import { Platillo } from '../platillo';
import { CategoriaPlatillos } from '../platillo';
import { CardplatilloComponent } from '../Components/cardplatillo/cardplatillo.component';
import { PlatilloService } from '../platillo.service';

@Component({
  selector: 'app-menu-sushi',
  standalone: true,
  imports: [CardplatilloComponent],
  templateUrl: './menu-sushi.component.html',
  styleUrl: './menu-sushi.component.css'
})
export class MenuSushiComponent {

    categorias: CategoriaPlatillos[] = [];
  

  constructor(
    private platilloService: PlatilloService
  ) {

    this.categorias =
      this.platilloService.obtenerCategorias('Sushi');

  }
}