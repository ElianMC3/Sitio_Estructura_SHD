import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatList, MatListItem } from '@angular/material/list';

@Component({
  selector: 'app-inicio',
  imports: [ MatCardModule,
    MatDividerModule,
    MatChipsModule,
    MatIconModule, MatList, MatListItem],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
