import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-parceiros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parceiros.component.html',
  styleUrls: ['./parceiros.component.css']
})
export class ParceirosComponent {
  logoIBM = 'assets/images/logoIBM.png'; // Caminho corrigido
}
