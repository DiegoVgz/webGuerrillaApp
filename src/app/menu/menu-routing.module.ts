import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';
import { HomePage } from '../home/home.page';
import { ConnectPage } from '../connect/connect.page';
import { RankingPage } from '../ranking/ranking.page';
import { RegisterPage } from '../register/register.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {
        path: '/register',
        component: RegisterPage,
      },
      {
        path: '/ranking',
        component: RankingPage,
      },
      {
        path: '/connect',
        component: ConnectPage,
      }
      ,
      {
        path: '/home',
        component: HomePage,
      },
   
    ]
  
  },
  {
    path:'',
    redirectTo:'/menu'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
