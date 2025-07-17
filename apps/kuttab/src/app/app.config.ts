import {
  ApplicationConfig, importProvidersFrom,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import {
  HTTP_INTERCEPTORS, HttpClient,
  HttpClientModule,
  HttpInterceptorFn,
  provideHttpClient,
  withInterceptors
} from "@angular/common/http";
import {HeadersInterceptor} from "./headers.interceptor";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
export const bearerInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('debug_token');

  if (token)
    req = req.clone({
      setHeaders: {
        token: token,
      },
    });
  return next(req);
};
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(appRoutes),
    provideHttpClient(withInterceptors([bearerInterceptor])),
    { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true },
    // provideHttpClient(),
  ],
};
