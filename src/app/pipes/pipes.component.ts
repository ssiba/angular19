import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PowerPipe } from '../power.pipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule,PowerPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

}
