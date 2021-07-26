import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DRQRoutes } from './constants';

const drqRoutes = new DRQRoutes();

const routes: Routes = [
  {
    path: drqRoutes.LOGIN,
    loadChildren: () => import('./modules/autenticacao/pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: drqRoutes.PESSOA_FISICA,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/pessoa-fisica/root-page/pessoa-fisica.module').then(m => m.PessoaFisicaPageModule),
      },
      {
        path: drqRoutes.DADOS_CONTA,
        loadChildren: () => import('./modules/pessoa-fisica/dados-conta/dados-conta.module').then(m => m.DadosContaPageModule)
      },
      {
        path: drqRoutes.DADOS_PROFISSIONAIS,
        loadChildren: () => import('./modules/pessoa-fisica/dados-profissionais/dados-profissionais.module').then(m => m.DadosProfissionaisPageModule)
      },
      {
        path: drqRoutes.DADOS_BANCARIOS,
        loadChildren: () => import('./modules/pessoa-fisica/dados-bancarios/dados-bancarios.module').then(m => m.DadosBancariosPageModule)
      },
      {
        path: drqRoutes.DADOS_PLANO_SAUDE,
        loadChildren: () => import('./modules/pessoa-fisica/dados-plano-saude/dados-plano-saude.module').then(m => m.DadosPlanoSaudePageModule)
      },
    ],

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
