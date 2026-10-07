import { Component } from '@angular/core';
import { CardinfhistoriaComponent } from '../Components/cardinfhistoria/cardinfhistoria.component';
import { CardvaloresComponent } from '../Components/cardvalores/cardvalores.component';
import { CardmisiovisionComponent } from '../Components/cardmisiovision/cardmisiovision.component';

@Component({
  selector: 'app-sobrenosotros',
  standalone: true,
  imports: [CardinfhistoriaComponent, CardvaloresComponent, CardmisiovisionComponent],
  templateUrl: './sobrenosotros.component.html',
  styleUrl: './sobrenosotros.component.css'
})
export class SobrenosotrosComponent {

}
