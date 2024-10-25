import { Component } from '@angular/core';
import { SliderComponent } from "../slider/slider.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SliderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
