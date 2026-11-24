import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobrenosotrosComponent } from './sobrenosotros/sobrenosotros.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { MenuComponent } from './menu/menu.component';
import { MenuSushiComponent } from './menu-sushi/menu-sushi.component';
import { MenuCominachinaComponent } from './menu-cominachina/menu-cominachina.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'menu', component: MenuComponent},
  {path:'menu/sushi', component: MenuSushiComponent},
  {path:'menu/comida-china', component: MenuCominachinaComponent},
  { path: 'sobrenosotros', component: SobrenosotrosComponent },
  {path: 'contactanos', component: ContactanosComponent}
];
