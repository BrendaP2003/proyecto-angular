
import { Injectable } from '@angular/core';
import { Platillo, CategoriaPlatillos } from './platillo';

@Injectable({
  providedIn: 'root'
})
export class PlatilloService {

  // ==========================================
  // DATOS DE PRUEBA DE LOS PLATILLOS
  // ==========================================

  private platillos: Platillo[] = [

    // =========================
    // SUSHI - APERITIVOS
    // =========================

    {
      nombre: 'Arroz Especial',
      imagen: '',
      descripcion: 'Res, pollo y camarón, Philadelphia, aguacate y verduras con salsa tampico.',
      precio: 110,
      tipo: 'Sushi',
      categoria: 'Aperitivos y Entradas'
    },

    {
      nombre: "Bomba Stick's",
      imagen: '',
      descripcion: 'Camarón, res, pollo, surimi y queso Chihuahua.',
      precio: 100,
      tipo: 'Sushi',
      categoria: 'Aperitivos y Entradas'
    },

    {
      nombre: 'Chiles Rellenos (3 pzas)',
      imagen: '',
      descripcion: 'Camarón, res, tocino y queso Chihuahua.',
      precio: 115,
      tipo: 'Sushi',
      categoria: 'Aperitivos y Entradas'
    },

    // =========================
    // SUSHI - ROLLOS EMPANIZADOS
    // =========================

    {
      nombre: 'Mar y Tierra',
      imagen: '',
      descripcion: 'Camarón, res, pepino, aguacate y Philadelphia por dentro.',
      precio: 85,
      tipo: 'Sushi',
      categoria: 'Rollos Empanizados (Calientes)'
    },

    {
      nombre: 'Cielo, Mar y Tierra',
      imagen: '',
      descripcion: 'Res, pollo y camarón, aguacate por dentro.',
      precio: 95,
      tipo: 'Sushi',
      categoria: 'Rollos Empanizados (Calientes)'
    },

    {
      nombre: 'Tres Quesos',
      imagen: '',
      descripcion: 'Camarón, res, Philadelphia, queso Chihuahua, amarillo y gratinado por fuera.',
      precio: 95,
      tipo: 'Sushi',
      categoria: 'Rollos Empanizados (Calientes)'
    },

    // =========================
    // SUSHI - ROLLOS NATURALES
    // =========================

    {
      nombre: 'Guamuchilito Roll',
      imagen: '',
      descripcion: 'Camarón, pulpo, surimi, pepino y Philadelphia por dentro.',
      precio: 125,
      tipo: 'Sushi',
      categoria: 'Rollos Naturales (Frescos)'
    },

    {
      nombre: 'Luz y Fuego',
      imagen: '',
      descripcion: 'Cangrejo, camarón, chile caribe y aguacate por dentro.',
      precio: 105,
      tipo: 'Sushi',
      categoria: 'Rollos Naturales (Frescos)'
    },

    // =========================
    // SUSHI - BEBIDAS
    // =========================

    {
      nombre: 'Té 1/2 litro',
      imagen: '',
      descripcion: '',
      precio: 20,
      tipo: 'Bebidas',
      categoria: 'Bebidas'
    },

    {
      nombre: 'Té 1 litro',
      imagen: '',
      descripcion: '',
      precio: 30,
      tipo: 'Bebidas',
      categoria: 'Bebidas'
    },

    // =========================
    // COMIDA CHINA
    // =========================

    {
      nombre: 'Comida China 1',
      imagen: '',
      descripcion: 'Descripción del platillo.',
      precio: 110,
      tipo: 'Comida China',
      categoria: 'Comida China'
    },

    {
      nombre: 'Comida China 2',
      imagen: '',
      descripcion: 'Descripción del platillo.',
      precio: 100,
      tipo: 'Comida China',
      categoria: 'Comida China'
    },

    {
      nombre: 'Comida China 3',
      imagen: '',
      descripcion: 'Descripción del platillo.',
      precio: 115,
      tipo: 'Comida China',
      categoria: 'Comida China'
    }

  ];

  // ==========================================
  // OBTENER TODOS LOS PLATILLOS
  // ==========================================

  getPlatillos(): Platillo[] {
    return this.platillos;
  }

  // ==========================================
  // OBTENER PLATILLOS POR TIPO DE COMIDA
  // ==========================================

  obtenerPorTipo(tipo: string): Platillo[] {

    return this.platillos.filter(
      platillo => platillo.tipo === tipo
    );

  }

  // ==========================================
  // OBTENER PLATILLOS POR CATEGORÍA
  // ==========================================

  obtenerPorCategoria(categoria: string): Platillo[] {

    return this.platillos.filter(
      platillo => platillo.categoria === categoria
    );

  }

  // ==========================================
  // OBTENER CATEGORÍAS DE UN TIPO DE COMIDA
  // ==========================================

 obtenerCategorias(tipo: string): CategoriaPlatillos[] {

  // 1. Obtener los platillos del menú solicitado
  // y agregar las bebidas compartidas.
  const platillosTipo = this.platillos.filter(
    platillo =>
      platillo.tipo === tipo ||
      platillo.tipo === 'Bebidas'
  );

  // 2. Obtener las categorías sin repetir.
  const categorias = [
    ...new Set(
      platillosTipo.map(
        platillo => platillo.categoria
      )
    )
  ];

  // 3. Agrupar los platillos por categoría.
  return categorias.map(categoria => ({
    nombre: categoria,
    platillos: platillosTipo.filter(
      platillo => platillo.categoria === categoria
    )
  }));

}

}
