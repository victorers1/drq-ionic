import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DRQRoutes } from './constants';

const drqRoutes = new DRQRoutes();

const routes: Routes = [
  {
    path: '',
    redirectTo: drqRoutes.LOGIN,
    pathMatch: 'full'
  },
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
        path: drqRoutes.CONFIG_DADOS,
        children: [
          {
            path: '',
            loadChildren: () => import('./modules/pessoa-fisica/config-dados/config-dados.module').then(m => m.ConfigDadosPageModule),
          },
          {
            path: drqRoutes.EDIT_DADOS_CONTA,
            loadChildren: () => import('./modules/pessoa-fisica/dados-conta/dados-conta.module').then(m => m.DadosContaPageModule),
          },
          {
            path: drqRoutes.EDIT_DADOS_PROFISSIONAIS + '/:' + drqRoutes.PARAM_DADO_PROFISSAO,
            children: [
              {
                path: '',
                loadChildren: () => import('./modules/pessoa-fisica/dados-profissionais/dados-profissionais.module').then(m => m.DadosProfissionaisPageModule)
              },
              {
                path: drqRoutes.EDIT_DADOS_EXPEDIENTE + '/:' + drqRoutes.PARAM_DADO_EXPEDIENTE,
                loadChildren: () => import('./modules/pessoa-fisica/dados-expediente/dados-expediente.module').then(m => m.DadosExpedientePageModule)
              },
            ]
          },
          {
            path: drqRoutes.EDIT_DADOS_BANCARIOS + '/:' + drqRoutes.PARAM_DADO_BANCARIO,
            loadChildren: () => import('./modules/pessoa-fisica/dados-bancarios/dados-bancarios.module').then(m => m.DadosBancariosPageModule)
          },
          {
            path: drqRoutes.EDIT_DADOS_PLANO_SAUDE + '/:' + drqRoutes.PARAM_DADO_PLANO_SAUDE,
            loadChildren: () => import('./modules/pessoa-fisica/dados-plano-saude/dados-plano-saude.module').then(m => m.DadosPlanoSaudePageModule)
          },
        ]
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
