import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {getStorage, provideStorage} from '@angular/fire/storage';
import {FIREBASE_OPTIONS} from "@angular/fire/compat";
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule, ReactiveFormsModule),
    provideZoneChangeDetection({eventCoalescing: true}), provideRouter(routes), provideFirebaseApp(() => initializeApp({
      "projectId": "blind-tasting-ed2c2",
      "appId": "1:25746358459:web:baa4806792814b36d6299e",
      "databaseURL": "https://blind-tasting-ed2c2-default-rtdb.europe-west1.firebasedatabase.app",
      "storageBucket": "blind-tasting-ed2c2.appspot.com",
      "apiKey": "AIzaSyB6GqRePfyzKJokrJWqjqEw3gJlEJVaK4w",
      "authDomain": "blind-tasting-ed2c2.firebaseapp.com",
      "messagingSenderId": "25746358459"
    })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({
      "projectId": "blind-tasting-ed2c2",
      "appId": "1:25746358459:web:baa4806792814b36d6299e",
      "databaseURL": "https://blind-tasting-ed2c2-default-rtdb.europe-west1.firebasedatabase.app",
      "storageBucket": "blind-tasting-ed2c2.appspot.com",
      "apiKey": "AIzaSyB6GqRePfyzKJokrJWqjqEw3gJlEJVaK4w",
      "authDomain": "blind-tasting-ed2c2.firebaseapp.com",
      "messagingSenderId": "25746358459"
    })), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({
      "projectId": "blind-tasting-ed2c2",
      "appId": "1:25746358459:web:baa4806792814b36d6299e",
      "databaseURL": "https://blind-tasting-ed2c2-default-rtdb.europe-west1.firebasedatabase.app",
      "storageBucket": "blind-tasting-ed2c2.appspot.com",
      "apiKey": "AIzaSyB6GqRePfyzKJokrJWqjqEw3gJlEJVaK4w",
      "authDomain": "blind-tasting-ed2c2.firebaseapp.com",
      "messagingSenderId": "25746358459"
    })), provideFirestore(() => getFirestore()), provideStorage(() => getStorage()),
    {
      provide: FIREBASE_OPTIONS, useValue: {
        "projectId": "blind-tasting-ed2c2",
        "appId": "1:25746358459:web:baa4806792814b36d6299e",
        "databaseURL": "https://blind-tasting-ed2c2-default-rtdb.europe-west1.firebasedatabase.app",
        "storageBucket": "blind-tasting-ed2c2.appspot.com",
        "apiKey": "AIzaSyB6GqRePfyzKJokrJWqjqEw3gJlEJVaK4w",
        "authDomain": "blind-tasting-ed2c2.firebaseapp.com",
        "messagingSenderId": "25746358459"
      }
    }, provideAnimationsAsync()

  ]
};
