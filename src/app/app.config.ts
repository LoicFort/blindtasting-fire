import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const firebaseConfig = {
  apiKey: 'AIzaSyCTubd2olh6VWQiBDSASzrBLsCQ50W-iv4',
  authDomain: 'blind-tasting-43ec5.firebaseapp.com',
  projectId: 'blind-tasting-43ec5',
  storageBucket: 'blind-tasting-43ec5.appspot.com',
  messagingSenderId: '469711191601',
  appId: '1:469711191601:web:c5cc092fd87ac1a7b91f10',
};

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule, ReactiveFormsModule),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirestore(() => getFirestore(), console.log("firestore")),
    provideFirebaseApp(() => initializeApp(firebaseConfig), console.log("firebase")),
    provideAuth(() => getAuth()),
    {
      provide: FIREBASE_OPTIONS,
      useValue: firebaseConfig,
    },
    provideAnimationsAsync(),
  ],
};
