import {Routes} from '@angular/router';
import {CreateSessionComponent} from "./shared/components/create-session/create-session.component";
import {HomePageComponent} from "./shared/components/home-page/home-page.component";
import {GuesserPageComponent} from "./shared/components/guesser-page/guesser-page.component";
import {ResultPageComponent} from "./shared/components/result-page/result-page.component";

export const routes: Routes = [

  {
    path: 'create',
    component: CreateSessionComponent
  },
  {
    path: 'guess-wine',
    component: GuesserPageComponent
  },
  {
    path: 'result',
    component: ResultPageComponent
  },
  {
    path: '**',
    component: HomePageComponent
  },
];
