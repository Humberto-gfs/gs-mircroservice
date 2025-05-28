import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  titulo = 'Global Solution';
  descricao = 'Uma jornada tecnológica rumo ao futuro.';
  dataEvento = '26 de maio';
  destaques = ['Inovação', 'Tecnologia', 'Impacto Social'];
  mostrarDetalhes = true; // Variável para controlar exibição condicional
}
