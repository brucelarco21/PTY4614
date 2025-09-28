import { Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login';
import { NoticiasComponent } from './paginas/noticias/noticias';
import { EventosComponent } from './paginas/eventos/eventos';
import { VecinoComponent } from './admin/vecinos/vecinos';
import { AdminPanelComponent } from './admin/panel/panel';
import { ProyectosComponent } from './paginas/proyectos/proyectos';
import { CertificadosComponent } from './paginas/certificados/certificados';

import { authGuard } from './guards/guards';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },

  // rutas accesibles con cualquier login
  { path: 'noticias', component: NoticiasComponent, canActivate: [authGuard] },
  { path: 'eventos', component: EventosComponent, canActivate: [authGuard] },
  { path: 'proyectos', component: ProyectosComponent, canActivate: [authGuard] },
  { path: 'certificados', component: CertificadosComponent, canActivate: [authGuard] },

  // rutas exclusivas para roles
  { path: 'vecino', component: VecinoComponent, canActivate: [authGuard], data: { role: 'vecino' } },
  { path: 'admin', component: AdminPanelComponent, canActivate: [authGuard], data: { role: 'admin' } },

  { path: '', redirectTo: 'noticias', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];
