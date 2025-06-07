import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

interface PortraitItem {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-portfolio-component',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './portfolio-component.component.html',
  styleUrl: './portfolio-component.component.css'
})
export class PortfolioComponentComponent {

  selectedImage: PortraitItem | null = null; // Pour le modal

   portraitsItems: PortraitItem[] = [
    { src: '/ImagesHomeHeader/dessin2.jpg', alt: 'dessin femme noire nue noir sur blanc' }, //
    { src: '/ImagesHomeHeader/dessin3.jpg', alt: 'portrait femme innachevé' },

    // Ajoutez plus d'éléments selon le nombre d'images que vous avez
  ];

  tableauItems = [
    { src: '/ImagesHomeHeader/baniere3.jpg', alt: 'peinture sur pinceau' },
    { src: '/ImagesHomeHeader/baniere4.jpeg', alt: 'peinture sur pinceau' },
  ]

  brandingItems = [
    { src: '/ImagesHomeHeader/baniere6.jpeg', alt: 'peinture sur pinceau' },
    { src: '/ImagesHomeHeader/baniere7.jpeg', alt: 'peinture sur pinceau' },
    { src: '/ImagesHomeHeader/baniere3.jpg', alt: 'peinture sur pinceau' },
    { src: '/ImagesHomeHeader/baniere4.jpeg', alt: 'peinture sur pinceau' },
    { src: '/ImagesHomeHeader/dessin2.jpg', alt: 'dessin femme noire nue noir sur blanc' }, //
    { src: '/ImagesHomeHeader/dessin3.jpg', alt: 'portrait femme innachevé' },
  ]

   // Fonction pour ouvrir le modal avec l'image sélectionnée
  openImageModal(item: PortraitItem): void {
    this.selectedImage = item;
    // Si vous utilisez Bootstrap 5.x et que le modal est défini dans le HTML
    // vous pouvez utiliser JavaScript pour l'ouvrir.
    // Ou si vous utilisez ng-bootstrap ou ngx-bootstrap, leurs services le feront pour vous.
    // Exemple simple pour Bootstrap 5 JS (nécessite l'intégration du JS de Bootstrap)
    const modalElement = document.getElementById('imageModal');
    if (modalElement) {
      const modal = new (window as any).bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  // Fonction pour fermer le modal (si besoin de logique supplémentaire)
  closeImageModal(): void {
    this.selectedImage = null;
  }
}

