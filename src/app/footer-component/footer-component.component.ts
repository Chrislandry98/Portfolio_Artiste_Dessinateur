import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer-component',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './footer-component.component.html',
  styleUrl: './footer-component.component.css'
})
export class FooterComponentComponent {
  
  /*variable pour derouler les boutons reseaux sociaux lorsque survolé*/
  estWhatsappClick: boolean = false;
  estTelegramClick: boolean = false;

  /*variable pour cacher les bouton whatsapp et telegram*/
  estCache: boolean = false;

  /*Fonction pour activer et desactiver le chat
  toggleChatbox() {
    this.isChatboxOpen = !this.isChatboxOpen; // Inverse l'état du chatbox 
  } */

  /*Fonction pour cacher bouton wha*/
  toggleWhaButton() {
    this.estWhatsappClick = !this.estWhatsappClick ; // Définir la variable à true lorsque la souris survole le bouton
  }

  /*Fonction pour cacher bouton tel*/
  toggleTelButton(){
    this.estTelegramClick = !this.estTelegramClick ; 
  }

  /*Fonction pour gerer l'affichage des boutons reseaux sociaux*/
  hiddeButton(){
    this.estCache = !this.estCache;
    console.log(this.estCache);
  }

}
