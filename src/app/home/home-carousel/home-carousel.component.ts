import { Component, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

/**
 * Home Carousel section component.
 */
@Component({
  selector: 'sha-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeCarouselComponent {
  /**
   * Option for Owl Carousel.
   */
  public customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 500,
    autoplayHoverPause: false,
    navSpeed: 700,
    navText: ['', ''],
    nav: true,
    items: 1,
  };

  /**
   * Slides for the carousel.
   */
  public slides = [
    {
      id: '0',
      src: '../../../assets/img/slider1.jpg',
      title: 'Slide 1',
    },
    {
      id: '1',
      src: '../../../assets/img/slider2.jpg',
      title: 'Slide 2',
    },
    {
      id: '2',
      src: '../../../assets/img/slider3.jpg',
      title: 'Slide 3',
    },
    {
      id: '3',
      src: '../../../assets/img/slider4.jpg',
      title: 'Slide 4',
    },
  ];
}
