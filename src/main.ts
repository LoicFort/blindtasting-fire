import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/testconfig';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .then(() => console.log('App loaded'))
  .catch((err) => console.error(err));
