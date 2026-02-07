import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from '../component/shared/breadcrumb/breadcrumb.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-layout',
  imports: [RouterModule, FormsModule, BreadcrumbComponent, MatIcon],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
   quickQuery = '';

  constructor(private router: Router) {}

  goSearch(): void {
    const q = (this.quickQuery || '').trim();
    // Navega a /busqueda?q=...
    this.router.navigate(['/busqueda'], { queryParams: { q } });
  }
}
