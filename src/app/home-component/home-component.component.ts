import { Component } from '@angular/core';
import { HomeheaderComponent } from './homeheader/homeheader.component';
import { HomeportfolioComponent } from './homeportfolio/homeportfolio.component';
import { HomeinteractionComponent } from './homeinteraction/homeinteraction.component';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [HomeheaderComponent, HomeportfolioComponent, HomeinteractionComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {

}
