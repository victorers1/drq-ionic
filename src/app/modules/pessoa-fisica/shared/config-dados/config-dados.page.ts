import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { IDadosDeProfissao, YCArray } from 'src/app/apollo-constants';
import { DRQRoutes, TIPO_USUARIO } from 'src/app/constants';
import { Especialidade } from 'src/app/models/geral/especialidade';
import { Profissao } from 'src/app/models/geral/profissao';
import { DadosDeProfissao } from 'src/app/models/pessoas/pessoa-fisica/dados-profissao';
import { Paciente } from 'src/app/models/pessoas/pessoa-fisica/paciente';
import { PessoaFisica } from 'src/app/models/pessoas/pessoa-fisica/pessoa-fisica';
import { Profissional } from 'src/app/models/pessoas/pessoa-fisica/profissional';

import { PacienteService } from 'src/app/services/usuario/paciente.service';
import { ProfissionalService } from 'src/app/services/usuario/profissional.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { YCodifyService, YC_ACTION } from 'src/app/services/yc/yc.service';

@Component({
  selector: 'app-config-dados',
  templateUrl: './config-dados.page.html',
  styleUrls: ['./config-dados.page.scss'],
})
export class ConfigDadosPage implements OnInit {
  routes = new DRQRoutes();

  pessoaFisicaService: PacienteService | ProfissionalService;
  pessoaFisica: PessoaFisica;

  constructor(
    public usuarioService: UsuarioService,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private yc: YCodifyService
  ) {}

  async ngOnInit() {
    switch (this.usuarioService.tipoUsuario) {
      case TIPO_USUARIO.PROFISSIONAL:
        this.pessoaFisicaService =
          this.usuarioService.get() as ProfissionalService;
        this.pessoaFisica = this.pessoaFisicaService.usuario as Profissional;
        break;
      case TIPO_USUARIO.PACIENTE:
        this.pessoaFisicaService = this.usuarioService.get() as PacienteService;
        this.pessoaFisica = this.pessoaFisicaService.usuario as Paciente;
        break;
      default:
        throw new Error('Service não criado. Tipo de usuário inválido.');
    }

    this.getConfigDados(this.pessoaFisica.id);
  }

  async getConfigDados(idPessoa: number) {
    const result = await this.yc.request<YCArray<IDadosDeProfissao>>({
      action: YC_ACTION.READ,
      object: {
        classUID: 'dadosdeprofissao',
        role: 'ROLE_ADMIN',
        pessoafisica: {
          id: idPessoa,
          role: 'ROLE_ADMIN',
          classUID: 'pessoafisica',
        },
      },
      criterion: {
        connective: 'AND',
        toCount: false,
        orderBy: 'id',
        order: 'asc',
        maxRegisters: 20,
        firstRegister: 0,
      },
      associations: {
        mode: true,
        level: 2,
      },
    });

    const dadosDeProfissao = result.data.map(
      (dp) =>
        new DadosDeProfissao(
          dp.pessoafisica.id,
          new Especialidade(
            dp.especialidade.id,
            dp.especialidade.nome,
            new Profissao(
              dp.especialidade.profissao.id,
              dp.especialidade.profissao.nome
            )
          ),
          dp.id,
          dp.publico,
          dp.graudeinstrucao
        )
    );
    this.pessoaFisica.dadosProfissao = dadosDeProfissao;
  }

  createDadoProfissional() {
    this.navCtrl.navigateForward([this.routes.EDIT_DADOS_PROFISSIONAIS], {
      relativeTo: this.route,
    });
  }

  openDadoDeProfissao(id: number) {
    this.navCtrl.navigateForward([this.routes.EDIT_DADOS_PROFISSIONAIS], {
      state: { id },
      relativeTo: this.route,
    });
  }

  createDadoBancario() {
    this.navCtrl.navigateForward([this.routes.EDIT_DADOS_BANCARIOS], {
      relativeTo: this.route,
    });
  }

  createDadoPlanoSaude() {
    this.navCtrl.navigateForward([this.routes.EDIT_DADOS_PLANO_SAUDE], {
      relativeTo: this.route,
    });
  }
}
