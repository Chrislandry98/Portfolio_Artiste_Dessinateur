import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HomeComponentComponent } from "./home-component/home-component.component";
import { PortfolioComponentComponent } from './portfolio-component/portfolio-component.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponentComponent,HomeComponentComponent, PortfolioComponentComponent, ContactUsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Site_filipe';
}
