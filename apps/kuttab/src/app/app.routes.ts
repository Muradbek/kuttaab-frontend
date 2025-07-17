import { Route } from '@angular/router';
import {isLoggedGuard} from "./login/login.guard";

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginFormComponent),
  },
  {
    path: 'view',
    loadChildren: () =>
      import('./remote-entry/entry.routes').then((m) => m.remoteRoutes),
    canActivate: [isLoggedGuard],
    canActivateChild: [isLoggedGuard],
  },
  {
    path: '',
    redirectTo: 'view',
    pathMatch: 'full',
  },
];
