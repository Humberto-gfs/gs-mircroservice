import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HoverBorderDirective } from '../../directives/hover-border.directive';
import { Evento } from '../../models/evento.model';
import { EventoCardComponent } from '../evento-card/evento-card.component';

@Component({
  selector: 'app-programacao',
  standalone: true,
  imports: [CommonModule, EventoCardComponent, HoverBorderDirective],
  templateUrl: './programacao.component.html',
  styleUrls: ['./programacao.component.css']
})
export class ProgramacaoComponent {
  public eventos: Evento[] = [
    {
      id: 1,
      titulo: 'Futuro da Tecnologia com Angular',
      data: '26 de maio',
      horario: '19H00',
      local: 'Online'
    },
    {
      id: 2,
      titulo: 'Workshop de TypeScript',
      data: '27 de maio',
      horario: '14H00',
      local: 'Presencial'
    }
  ];

  nomeEvento: string = 'Futuro da Tecnologia com Angular';
  inscrito: boolean = false;

  participar() {
    this.inscrito = true;
  }
}


