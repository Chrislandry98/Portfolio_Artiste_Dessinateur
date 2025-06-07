import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

/*variable pour cacher les bouton whatsapp et telegram*/
  estCache: boolean = false;

  /*Fonction pour gerer l'affichage des boutons reseaux sociaux*/
  hiddeButton(){
    this.estCache = !this.estCache;
    console.log(this.estCache);
  }
}
