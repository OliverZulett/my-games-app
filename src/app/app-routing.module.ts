import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LatestComponent } from './pages/latest/latest.component';
import { PopularsComponent } from './pages/populars/populars.component';
import { GameComponent } from './pages/game/game.component';


const routes: Routes = [
  { path: 'latests', component: LatestComponent },
  { path: 'populars', component: PopularsComponent },
  { path: 'game', component: GameComponent },
  { path: '**', redirectTo: 'latests', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
