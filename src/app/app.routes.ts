import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PortfolioComponentComponent } from './portfolio-component/portfolio-component.component';

export const routes: Routes = [
   /* { path: 'blog-registration/:id', component: BlogRegistrationComponent }, // Route avec paramètre d'ID*/
  {path: 'portfolio', component: PortfolioComponentComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'home', component: HomeComponentComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
