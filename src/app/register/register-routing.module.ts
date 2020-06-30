import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterPage } from './register.page';
import { HomePageRoutingModule } from '../home/home-routing.module';

const routes: Routes = [
  {
    path: '',
    component: RegisterPage
  },
  {
    path: 'home',
    component: HomePageRoutingModule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterPageRoutingModule {}
