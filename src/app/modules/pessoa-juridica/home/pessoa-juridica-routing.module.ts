import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DRQRoutes } from 'src/app/constants';

import { HomePage } from './pessoa-juridica.page';

const drqRoutes = new DRQRoutes();

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: drqRoutes.AGENDAR,
    loadChildren: () =>
      import('../agendar/agendar.module').then((m) => m.AgendarPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
