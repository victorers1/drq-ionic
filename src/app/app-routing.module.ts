import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  // },
  // {
  //   path: 'message/:id',
  //   loadChildren: () => import('./pages/view-message/view-message.module').then(m => m.ViewMessagePageModule)
  // },
  {
    path: 'login',
    loadChildren: () => import('./modules/autenticacao/pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'pessoa_fisica',
    loadChildren: () => import('./modules/pessoa-fisica/pessoa-fisica.module').then(m => m.PessoaFisicaPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
