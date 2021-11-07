import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DRQRoutes } from './constants';

const drqRoutes = new DRQRoutes();

const routes: Routes = [
  {
    path: '',
    redirectTo: drqRoutes.LOGIN,
    pathMatch: 'full',
  },
  {
    path: drqRoutes.LOGIN,
    loadChildren: () =>
      import('./modules/autenticacao/login/login.module').then(
        (m) => m.LoginPageModule
      ),
  },
  {
    path: drqRoutes.PESSOA_FISICA_PACIENTE,
    loadChildren: () =>
      import('./modules/pessoa-fisica/paciente/home/pessoa-fisica.module').then(
        (m) => m.PessoaFisicaPageModule
      ),
  },
  {
    path: drqRoutes.PESSOA_FISICA_PROFISSIONAL,
    loadChildren: () =>
      import(
        './modules/pessoa-fisica/profissional/home/pessoa-fisica.module'
      ).then((m) => m.PessoaFisicaPageModule),
  },
  {
    path: drqRoutes.PESSOA_JURIDICA,
    loadChildren: () =>
      import('./modules/pessoa-juridica/home/pessoa-juridica.module').then(
        (m) => m.HomePageModule
      ),
  },
  {
    path: 'select-plano-saude',
    loadChildren: () =>
      import(
        './modules/shared/select-plano-saude/select-plano-saude.module'
      ).then((m) => m.SelectPlanoSaudePageModule),
  },
  {
    path: 'select-profissional',
    loadChildren: () =>
      import(
        './modules/shared/select-profissional/select-profissional.module'
      ).then((m) => m.SelectProfissionalPageModule),
  },
  {
    path: 'select-horario',
    loadChildren: () =>
      import('./modules/shared/select-horario/select-horario.module').then(
        (m) => m.SelectHorarioPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
