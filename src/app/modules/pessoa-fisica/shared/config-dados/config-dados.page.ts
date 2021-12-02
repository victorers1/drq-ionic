import { Component, OnInit } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core/types';
import { Apollo } from 'apollo-angular';
import { first } from 'rxjs/operators';
import { DRQRoutes, TIPO_USUARIO } from 'src/app/constants';
import { DadosBancarios } from 'src/app/models/pessoas/pessoa-fisica/dados-bancarios';
import { DadosDeProfissao } from 'src/app/models/pessoas/pessoa-fisica/dados-profissao';
import { Paciente } from 'src/app/models/pessoas/pessoa-fisica/paciente';
import { PessoaFisica } from 'src/app/models/pessoas/pessoa-fisica/pessoa-fisica';
import { Profissional } from 'src/app/models/pessoas/pessoa-fisica/profissional';
import { CONFIG_DADOS_QUERY, IConfigDados } from 'src/app/query-constants';
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

  constructor(public usuarioService: UsuarioService, private apollo: Apollo) {}

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
    let result: ApolloQueryResult<IConfigDados> = await this.apollo
      .watchQuery<IConfigDados>({
        query: CONFIG_DADOS_QUERY,
        variables: {
          id: idPessoa,
        },
      })
      .valueChanges.pipe(first())
      .toPromise();

    console.log({ dadosConfig: result });

    this.pessoaFisica.dadosProfissao =
      this.usuarioService.getDadosDeProfissaoFromResult(result, idPessoa);
    this.pessoaFisica.dadosBancarios = [];
    this.pessoaFisica.dadosPlanoSaude = [];
    this.pessoaFisica.dadosDeDependente = [];
  }

  createDadoProfissional() {}

  createDadoBancario() {}

  createDadoPlanoSaude() {}
}
