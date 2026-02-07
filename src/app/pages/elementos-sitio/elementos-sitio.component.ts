import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-elementos-sitio',
  imports: [ MatCardModule,
    MatDividerModule,
    MatChipsModule,
    MatIconModule],
  templateUrl: './elementos-sitio.component.html',
  styleUrl: './elementos-sitio.component.css'
})
export class ElementosSitioComponent {

}
