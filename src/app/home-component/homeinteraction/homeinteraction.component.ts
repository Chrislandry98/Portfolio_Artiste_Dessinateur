import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface StatItem {
  iconClass: string; // Class for the icon (e.g., 'bi bi-person', 'fa fa-user')
  number: number;
  label: string;
}

@Component({
  selector: 'app-homeinteraction',
  standalone: true,
  imports: [NgFor],
  templateUrl: './homeinteraction.component.html',
  styleUrl: './homeinteraction.component.css'
})
export class HomeinteractionComponent {
  stats: StatItem[] = [
    { iconClass: 'fas fa-person', number: 360, label: 'Happy Clients' },
    { iconClass: 'fas fa-camera', number: 540, label: 'Projects Completed' },
    { iconClass: 'fas fa-calendar-check', number: 4320, label: 'Working Days' }
  ];
}
