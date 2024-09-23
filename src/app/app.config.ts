import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';



export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule, ReactiveFormsModule),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),     
    provideAnimationsAsync(),
  ],
};
