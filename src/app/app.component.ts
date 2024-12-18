import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { BodyComponent } from "./body/body.component";
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, BodyComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appHolaMundo';
}
