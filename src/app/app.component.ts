import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarAppComponent } from './components/car-app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarAppComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'shoping-car-app';
}
