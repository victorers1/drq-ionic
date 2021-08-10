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
    loadChildren: () => import('./modules/autenticacao/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: drqRoutes.PESSOA_FISICA,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/pessoa-fisica/home/pessoa-fisica.module').then(m => m.PessoaFisicaPageModule),
      },
      {
        path: drqRoutes.AGENDA,
        loadChildren: () => import('./modules/pessoa-fisica/list-agenda/list-agenda.module').then(m => m.ListAgendaPageModule)
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
            loadChildren: () => import('./modules/pessoa-fisica/edit-dados-conta/dados-conta.module').then(m => m.DadosContaPageModule),
          },
          {
            path: drqRoutes.EDIT_DADOS_PROFISSIONAIS + '/:' + drqRoutes.PARAM_INDEX_DADO_PROFISSAO,
            children: [
              {
                path: '',
                loadChildren: () => import('./modules/pessoa-fisica/edit-dados-profissionais/dados-profissionais.module').then(m => m.DadosProfissionaisPageModule)
              },
              {
                path: drqRoutes.EDIT_DADOS_EXPEDIENTE + '/:' + drqRoutes.PARAM_INDEX_DADO_EXPEDIENTE,
                loadChildren: () => import('./modules/pessoa-fisica/edit-dados-expediente/dados-expediente.module').then(m => m.DadosExpedientePageModule)
              },
            ]
          },
          {
            path: drqRoutes.EDIT_DADOS_BANCARIOS + '/:' + drqRoutes.PARAM_INDEX_DADO_BANCARIO,
            loadChildren: () => import('./modules/pessoa-fisica/edit-dados-bancarios/dados-bancarios.module').then(m => m.DadosBancariosPageModule)
          },
          {
            path: drqRoutes.EDIT_DADOS_PLANO_SAUDE + '/:' + drqRoutes.PARAM_INDEX_DADO_PLANO_SAUDE,
            loadChildren: () => import('./modules/pessoa-fisica/edit-dados-plano-saude/dados-plano-saude.module').then(m => m.DadosPlanoSaudePageModule)
          },
        ]
      },
    ],
  },
  {
    path: drqRoutes.PESSOA_JURIDICA,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/pessoa-juridica/home/pessoa-juridica.module').then(m => m.HomePageModule)
      },
      {
        path: drqRoutes.AGENDA,
        loadChildren: () => import('./modules/pessoa-juridica/list-agenda/list-agenda.module').then(m => m.ListAgendaPageModule)
      },

      {
        path: drqRoutes.EDIT_DADOS_CONTA,
        loadChildren: () => import('./modules/pessoa-juridica/edit-dados-conta/dados-conta.module').then(m => m.DadosContaPageModule)
      },
      {
        path: drqRoutes.LIST_REQUISICOES_DADOS,
        children: [
          {
            path: '',
            loadChildren: () => import('./modules/pessoa-juridica/list-requisicoes-dado/requisicoes.module').then(m => m.RequisicoesPageModule)
          },
          {
            path: drqRoutes.EDIT_REQUISICAO_DADOS,
            loadChildren: () => import('./modules/pessoa-juridica/edit-requisicao-dado/edit-requisicao-dado.module').then(m => m.EditRequisicaoDadoPageModule)
          },
        ]
      },
      {
        path: drqRoutes.LIST_EXPEDIENTES,
        children: [
          {
            path: '',
            loadChildren: () => import('./modules/pessoa-juridica/list-expedientes/list-expedientes.module').then(m => m.ListExpedientesPageModule)
          },
          {
            path: drqRoutes.EDIT_DADOS_EXPEDIENTE + '/:' + drqRoutes.PARAM_INDEX_DADO_EXPEDIENTE,
            loadChildren: () => import('./modules/pessoa-juridica/edit-dados-expediente/dados-expediente.module').then(m => m.DadosExpedientePageModule)
          },
        ]
      }, {
        path: drqRoutes.LIST_UNIDADES,
        children: [
          {
            path: '',
            loadChildren: () => import('./modules/pessoa-juridica/list-unidades/list-unidades.module').then(m => m.ListUnidadesPageModule),
          },
          {
            path: drqRoutes.EDIT_UNIDADE,
            children: [
              {
                path: '',
                loadChildren: () => import('./modules/pessoa-juridica/edit-unidade/edit-unidade.module').then(m => m.EditUnidadePageModule)
              },
              {
                path: drqRoutes.EDIT_EXPEDIENTE, // SHARED PAGE
                loadChildren: () => import('./modules/shared/edit-expediente/edit-expediente.module').then(m => m.EditExpedientePageModule)
              }
            ]
          }
        ]
      },
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
