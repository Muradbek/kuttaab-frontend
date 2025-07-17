import {Route} from '@angular/router';
import {RemoteEntry} from './entry';
import {provideHttpClient, withInterceptorsFromDi, withRequestsMadeViaParent} from "@angular/common/http";

export const remoteRoutes: Route[] = [
  {
    path: '', component: RemoteEntry, children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/view/view').then((m) => m.View),
        providers: [
          provideHttpClient(
            withRequestsMadeViaParent(),
            withInterceptorsFromDi()
          ),
        ]
      }
    ]
  }
];
