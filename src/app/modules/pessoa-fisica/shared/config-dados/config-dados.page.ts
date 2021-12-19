import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DRQRoutes, TIPO_USUARIO } from 'src/app/constants';
import { Paciente } from 'src/app/models/pessoas/pessoa-fisica/paciente';
import { PessoaFisica } from 'src/app/models/pessoas/pessoa-fisica/pessoa-fisica';
import { Profissional } from 'src/app/models/pessoas/pessoa-fisica/profissional';
import {
  DADOS_PROFISSAO_SUBSCRIPTION,
  IConfigDadosDeProfissao,
  IDadosDeProfissao,
} from 'src/app/apollo-constants';
import { ApolloService } from 'src/app/services/apollo/apollo-service.service';
import { PacienteService } from 'src/app/services/usuario/paciente.service';
import { ProfissionalService } from 'src/app/services/usuario/profissional.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

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
    private apolloService: ApolloService
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

    await this.getConfigDados(this.pessoaFisica.id);
  }

  async getConfigDados(idPessoa: number) {
    this.apolloService.subscribe<IConfigDadosDeProfissao>(
      {
        query: DADOS_PROFISSAO_SUBSCRIPTION,
        variables: {
          id: idPessoa,
        },
      },
      ({ data }) => {
        if (data) {
          this.pessoaFisica.dadosProfissao =
            this.usuarioService.mapDadosDeProfissaoFromResult(
              data.DadosDeProfissao,
              idPessoa
            );
          this.pessoaFisica.dadosBancarios = [];
          this.pessoaFisica.dadosPlanoSaude = [];
          this.pessoaFisica.dadosDeDependente = [];
        }

        console.log({ dadosConfig: data });
      },
      (error) => {
        console.log('there was an error sending the query', error);
      }
    );
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
