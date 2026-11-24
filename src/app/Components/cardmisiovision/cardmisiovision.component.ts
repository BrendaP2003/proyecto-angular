import { Component, input } from '@angular/core';

@Component({
  selector: 'app-cardmisiovision',
  standalone: true,
  imports: [],
  templateUrl: './cardmisiovision.component.html',
  styleUrl: './cardmisiovision.component.css'
})
export class CardmisiovisionComponent {

   titulo= input.required<string>();
  texto= input.required<string>();

 

}
