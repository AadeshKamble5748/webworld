import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AppComponent } from './app.component';
import { SliderComponent } from '../slider/slider.component';
import { RegistrationComponent } from '../registration/registration.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'registration', component: RegistrationComponent },
];
