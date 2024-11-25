import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { CommonModule } from '@angular/common';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { loggerInterceptor } from '../core/interceptor/logger.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),  provideHttpClient(withInterceptors([loggerInterceptor])), provideAnimations(), CommonModule,   importProvidersFrom(HttpClientModule)]
};
