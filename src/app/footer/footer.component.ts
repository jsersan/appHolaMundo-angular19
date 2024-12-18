import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  standalone: true,
  styles: ``
})
export class FooterComponent {

  anio:number;

  constructor(){
    this.anio = new Date().getFullYear();
  }

}
