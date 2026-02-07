import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ElementosSitioComponent } from './pages/elementos-sitio/elementos-sitio.component';
import { MenuComponent } from './pages/menu/menu.component';
import { BreadcrumbComponent } from './component/shared/breadcrumb/breadcrumb.component';
import { MapasSitioComponent } from './pages/mapas-sitio/mapas-sitio.component';
import { Error404Component } from './pages/error-404/error-404.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { BreadcrumbsComponent } from './pages/breadcrumbs/breadcrumbs.component';

export const routes: Routes = [
    {
        path: '',
        component:InicioComponent,
        pathMatch:'full'
    },
    {
        path:'elementos',
        component:ElementosSitioComponent
    },
    {
        path:'menu',
        component:MenuComponent
    },
    {
        path:'breadcrumbs',
        component:BreadcrumbsComponent
    },
    {
        path:'mapas-sitio',
        component:MapasSitioComponent
    },
    {
        path:'error-404',
        component:Error404Component
    },
    {
        path:'busqueda',
        component:BusquedaComponent
    }
];


