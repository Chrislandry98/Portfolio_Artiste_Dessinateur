import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ServiceComponent } from './service/service.component';
import { Service } from '../../service';
import { ServiceTable } from '../../ServicesTable';

@Component({
  selector: 'app-homeportfolio',
  standalone: true,
  imports: [NgFor, ServiceComponent],
  templateUrl: './homeportfolio.component.html',
  styleUrl: './homeportfolio.component.css'
})
export class HomeportfolioComponent {

   // Définissez un tableau d'objets pour vos images de portfolio
  portfolioItems = [
    { src: '/ImagesHomeHeader/dessin2.jpg', alt: 'dessin femme noire nue noir sur blanc' }, //
    { src: '/ImagesHomeHeader/dessin3.jpg', alt: 'portrait femme innachevé' },
    { src: '/ImagesHomeHeader/baniere3.jpg', alt: 'peinture sur pinceau' },
    { src: '/ImagesHomeHeader/baniere4.jpeg', alt: 'peinture sur pinceau' },
    { src: '/ImagesHomeHeader/baniere6.jpeg', alt: 'peinture sur pinceau' },
    { src: '/ImagesHomeHeader/baniere7.jpeg', alt: 'peinture sur pinceau' },
    // Ajoutez plus d'éléments selon le nombre d'images que vous avez
  ];

  Services : Service[] = ServiceTable ;

  constructor() { }

  ngOnInit(): void {
    // Ici, vous pourriez charger des données depuis un service si nécessaire
  }

}
