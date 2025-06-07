import { Component, Input } from '@angular/core';
import { Service } from '../../../service';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  @Input() Service!: Service

}
