import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-evento-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './evento-card.component.html',
  styleUrls: ['./evento-card.component.css']
})
export class EventoCardComponent {
  @Input() titulo!: string;
  @Input() data!: string;
  @Input() horario!: string;
  @Input() local!: string;
}
