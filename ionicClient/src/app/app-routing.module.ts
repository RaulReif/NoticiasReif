import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main', loadChildren: () => import('./pages/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'policy',
    loadChildren: () => import('./pages/policy/policy.module').then( m => m.PolicyPageModule)
  },
  {
    path: 'sports',
    loadChildren: () => import('./pages/sports/sports.module').then( m => m.SportsPageModule)
  },
  {
    path: 'games',
    loadChildren: () => import('./pages/games/games.module').then( m => m.GamesPageModule)
  },
  {
    path: 'finance',
    loadChildren: () => import('./pages/finance/finance.module').then( m => m.FinancePageModule)
  },
  {
    path: 'fitness',
    loadChildren: () => import('./pages/fitness/fitness.module').then( m => m.FitnessPageModule)
  },
  {
    path: 'show-news/:id',
    loadChildren: () => import('./pages/show-news/show-news.module').then( m => m.ShowNewsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
