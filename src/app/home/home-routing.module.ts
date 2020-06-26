import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { RegisterPage } from '../register/register.page';
import { MenuPage } from '../menu/menu.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  
  },
  {
    path: 'home',
    component: HomePage,
  
  },
  {
    path:'register',
    component:RegisterPage
  },
  {
    path:'menu',
    component:MenuPage
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
