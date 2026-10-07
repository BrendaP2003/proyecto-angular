import { Component } from '@angular/core';
import { PromoCardComponentComponent } from '../Components/promo-card-component/promo-card-component.component';
import { ContactCardComponent } from '../Components/contact-card/contact-card.component';
import { ContactFormComponent } from '../Components/contact-form/contact-form.component';

@Component({
  selector: 'app-contactanos',
  standalone: true,
  imports: [PromoCardComponentComponent,ContactCardComponent,ContactFormComponent ],
  templateUrl: './contactanos.component.html',
  styleUrl: './contactanos.component.css'
})
export class ContactanosComponent {

}
