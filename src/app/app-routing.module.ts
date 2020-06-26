import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home-routing.module').then( m => m.HomePageRoutingModule),
  },

  {
    path: '',
    redirectTo:'home',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register-routing.module').then( m => m.RegisterPageRoutingModule)
  },

  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },

  {
    path: 'ranking',
    loadChildren: () => import('./ranking/ranking.module').then( m => m.RankingPageModule)
  },
  {
    path: 'match',
    loadChildren: () => import('./match/match.module').then( m => m.MatchPageModule)
  },
  {
    path: 'connect',
    loadChildren: () => import('./connect/connect.module').then( m => m.ConnectPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{ onSameUrlNavigation: 'reload'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
