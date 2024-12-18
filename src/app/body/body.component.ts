import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf} from '@angular/common'; 

@Component({
  selector: 'app-body',
  imports: [NgIf, NgFor],
  templateUrl: './body.component.html',
  standalone: true,
  styles: ``
})
export class BodyComponent {

  mostrar = true; 

  frase: any = {
    mensaje: "Um gran poder requiere una gran responsabilidad",
    autor: "Ben Parker"
  }

  personajes : string [] = ["Hulk", "Spiderman", "Thor", "Dardevil"]

}
