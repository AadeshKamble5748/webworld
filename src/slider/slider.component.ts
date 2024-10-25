import { Component } from '@angular/core';
import { CarouselConfig, CarouselModule } from 'ngx-bootstrap/carousel';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule, AlertConfig } from 'ngx-bootstrap/alert';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider',
  standalone: true,
  providers: [
    {
      provide: CarouselConfig,
      useValue: { interval: 1500, noPause: false, showIndicators: true },
    },
  ],
  imports: [
    CommonModule,
    CarouselModule,
    AccordionModule,
    AlertModule,
    ButtonsModule,
  ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  host: { ngSkipHydration: 'true' },
})
export class SliderComponent {
  slides = [
    { image: 'src/assets/nature.jpg', text: 'First' },
    { image: 'src/assets/ocean.jpg', text: 'Second' },
    { image: 'src/assets/night_tree.jpg', text: 'Third' },
  ];
  noWrapSlides = false;
  showIndicator = true;
  count: number = 0;

  obs$ = of([{ name: 'Louie' }, { name: 'Tess' }]);

  incrementCounter() {
    this.count = this.count + 1;
  }
  decrementCounter() {
    this.count = this.count - 1;
  }
  resetCounter() {
    this.count = 0;
  }
}
