import { Component, Input } from '@angular/core';
import { Service } from '../../../service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  @Input() Service!: Service

}
