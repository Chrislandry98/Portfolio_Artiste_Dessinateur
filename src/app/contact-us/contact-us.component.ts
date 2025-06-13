import { CommonModule } from '@angular/common';
import { Component, } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  name: string = '';
  email: string = '';
  message: string = '';

   onSubmit(): void {
    // Here you would handle the form submission, e.g., send data to a service
    console.log('Form Submitted!', {
      name: this.name,
      email: this.email,
      message: this.message
    });
    // Reset form fields after submission (optional)
    this.name = '';
    this.email = '';
    this.message = '';
    alert('Thank you for your message! We will get back to you soon.');
  }

    /*Fonction pour envoyer mail*/
    envoyerEmailAvecSujetEtCorps() {
    const sujet = encodeURIComponent('Informations sur nos services');
    const corps = encodeURIComponent('J\'aimerai avoir plus d\'infos sur vos services');
    window.location.href = "mailto:epandef@gmail.com?subject=" + encodeURIComponent(sujet) + "&body=" + encodeURIComponent(corps);
  }

}
