import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mapas-sitio',
  imports: [MatListModule, MatIconModule, MatCardModule, MatDividerModule,RouterLink],
  templateUrl: './mapas-sitio.component.html',
  styleUrl: './mapas-sitio.component.css'
})
export class MapasSitioComponent {

}
