import { Component } from '@angular/core';
import { Platillo } from '../platillo';
import { CardplatilloComponent } from '../cardplatillo/cardplatillo.component';

@Component({
  selector: 'app-menu-sushi',
  standalone: true,
  imports: [CardplatilloComponent],
  templateUrl: './menu-sushi.component.html',
  styleUrl: './menu-sushi.component.css'
})
export class MenuSushiComponent {

     sushis: Platillo[] = [

    // =========================
    // APERITIVOS Y ENTRADAS
    // =========================

    {
      nombre: 'Arroz Especial',
      imagen: '',
      descripcion: 'Res, pollo y camarón, Philadelphia, aguacate y verduras con salsa tampico.',
      precio: 110,
      categoria: 'Aperitivos y Entradas'
    },

    {
      nombre: "Bomba Stick's",
      imagen: '',
      descripcion: 'Camarón, res, pollo, surimi y queso Chihuahua.',
      precio: 100,
      categoria: 'Aperitivos y Entradas'
    },

    {
      nombre: 'Chiles Rellenos (3 pzas)',
      imagen: '',
      descripcion: 'Camarón, res, tocino y queso Chihuahua.',
      precio: 115,
      categoria: 'Aperitivos y Entradas'
    },


    // =========================
    // ROLLOS EMPANIZADOS
    // =========================

    {
      nombre: 'Mar y Tierra',
      imagen: '',
      descripcion: 'Camarón, res, pepino, aguacate y Philadelphia por dentro.',
      precio: 85,
      categoria: 'Rollos Empanizados (Calientes)'
    },

    {
      nombre: 'Cielo, Mar y Tierra',
      imagen: '',
      descripcion: 'Res, pollo y camarón, aguacate por dentro.',
      precio: 95,
      categoria: 'Rollos Empanizados (Calientes)'
    },

    {
      nombre: 'Tres Quesos',
      imagen: '',
      descripcion: 'Camarón, res, Philadelphia, queso Chihuahua, amarillo y gratinado por fuera.',
      precio: 95,
      categoria: 'Rollos Empanizados (Calientes)'
    },

    {
      nombre: 'El Chapo Roll',
      imagen: '',
      descripcion: 'Camarón, tocino, gratinado y empanizado por fuera.',
      precio: 110,
      categoria: 'Rollos Empanizados (Calientes)'
    },

    {
      nombre: 'Placoso Roll',
      imagen: '',
      descripcion: 'Camarón empanizado, res, tocino, queso Chihuahua, queso fundido y chile caribe.',
      precio: 130,
      categoria: 'Rollos Empanizados (Calientes)'
    },

    {
      nombre: 'Kanikama Roll',
      imagen: '',
      descripcion: 'Camarón, cangrejo, Philadelphia y aguacate por fuera.',
      precio: 125,
      categoria: 'Rollos Empanizados (Calientes)'
    },


    // =========================
    // ROLLOS NATURALES
    // =========================

    {
      nombre: 'Guamuchilito Roll',
      imagen: '',
      descripcion: 'Camarón, pulpo, surimi, pepino y Philadelphia por dentro, tampico y salsa de anguila por fuera.',
      precio: 125,
      categoria: 'Rollos Naturales (Frescos)'
    },

    {
      nombre: 'Luz y Fuego',
      imagen: '',
      descripcion: 'Cangrejo, camarón, chile caribe y aguacate por dentro, queso fundido por fuera.',
      precio: 105,
      categoria: 'Rollos Naturales (Frescos)'
    },

    {
      nombre: 'Silver Roll',
      imagen: '',
      descripcion: 'Relleno de res, camarón y pepino por dentro, Philadelphia y topping de cangrejo por fuera.',
      precio: 115,
      categoria: 'Rollos Naturales (Frescos)'
    },

    {
      nombre: 'Chacaloso Roll',
      imagen: '',
      descripcion: 'Res, camarón, tocino, aguacate y Philadelphia, camarón empanizado bañado en salsa de anguila por fuera.',
      precio: 135,
      categoria: 'Rollos Naturales (Frescos)'
    },

    {
      nombre: 'Mechudo',
      imagen: '',
      descripcion: 'Relleno de res, camarón, aguacate, pepino y Philadelphia, topping de cangrejo.',
      precio: 110,
      categoria: 'Rollos Naturales (Frescos)'
    },


    // =========================
    // BEBIDAS
    // =========================

    {
      nombre: 'Té 1/2 litro',
      imagen: '',
      descripcion: '',
      precio: 20,
      categoria: 'Bebidas'
    },

    {
      nombre: 'Té 1 litro',
      imagen: '',
      descripcion: '',
      precio: 30,
      categoria: 'Bebidas'
    }

  ];

   categorias = [
    {
      nombre: 'Aperitivos y Entradas',
      platillos: this.obtenerPlatillos('Aperitivos y Entradas')
    },

    {
      nombre: 'Rollos Empanizados (Calientes)',
      platillos: this.obtenerPlatillos('Rollos Empanizados (Calientes)')
    },

    {
      nombre: 'Rollos Naturales (Frescos)',
      platillos: this.obtenerPlatillos('Rollos Naturales (Frescos)')
    },

    {
      nombre: 'Bebidas',
      platillos: this.obtenerPlatillos('Bebidas')
    }
  ];


  obtenerPlatillos(categoria: string): Platillo[] {

    return this.sushis.filter(
      platillo => platillo.categoria === categoria
    );

  }


}