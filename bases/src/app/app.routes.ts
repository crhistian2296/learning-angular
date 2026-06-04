import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { DragonBallSuperPageComponent } from './pages/dragon-ball-super/dragon-ball-super-page.component';
import { DragonballPageComponent } from './pages/dragonball/dragonball-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';

export const routes: Routes = [
  { path: '', component: CounterPageComponent },
  { path: 'hero', component: HeroPageComponent },
  { path: 'dragonball', component: DragonballPageComponent },
  { path: 'dragon-ball-super', component: DragonBallSuperPageComponent },
  { path: '**', redirectTo: '' },
];
