export interface Platillo {
  nombre: string;
  imagen: string;
  descripcion: string;
  precio: number;
  tipo: string;
  categoria: string;
}


export interface CategoriaPlatillos {
  nombre: string;
  platillos: Platillo[];
}