import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core/types';
import { Apollo } from 'apollo-angular';
import { TIPO_USUARIO } from 'src/app/constants';
import { ConselhoDeClasse } from 'src/app/models/geral/conselho_de_classe';
import { Especialidade } from 'src/app/models/geral/especialidade';
import { Profissao } from 'src/app/models/geral/profissao';
import { DadosDeProfissao } from 'src/app/models/pessoas/pessoa-fisica/dados-profissao';
import { IConfigDados } from 'src/app/query-constants';
import { PacienteService } from './paciente.service';
import { PessoaJuridicaService } from './pessoa-juridica.service';
import { ProfissionalService } from './profissional.service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  tipoUsuario: TIPO_USUARIO;

  constructor(
    private pacienteService: PacienteService,
    private profissionalService: ProfissionalService,
    private pessoaJuridicaService: PessoaJuridicaService,
    private apollo: Apollo
  ) {
    // ! Setar tipousuario
  }

  get() {
    console.log(`UsuarioService.get(${this.tipoUsuario})`);
    switch (this.tipoUsuario) {
      case TIPO_USUARIO.PROFISSIONAL:
        return this.profissionalService;
      case TIPO_USUARIO.PESSOA_JURIDICA:
        return this.pessoaJuridicaService;
      case TIPO_USUARIO.PACIENTE:
        return this.pacienteService;
      default:
    }
  }

  // Usuario Utils Functions
  getDadosDeProfissaoFromResult(
    result: ApolloQueryResult<IConfigDados>,
    idPessoa: number
  ) {
    return result.data.DadosDeProfissao.map<DadosDeProfissao>((dado) => {
      let dadoDeProfissao = new DadosDeProfissao(
        idPessoa,
        new Profissao(dado.profissao.id, dado.profissao.nome)
      );
      dadoDeProfissao.conselhoDeClasse =
        dado.conselhoDeClasse != null
          ? new ConselhoDeClasse(
              dado.conselhoDeClasse.id,
              dado.conselhoDeClasse.sigla,
              dado.conselhoDeClasse.nome
            )
          : null;

      dadoDeProfissao.especialidade =
        dado.especialidade != null
          ? new Especialidade(dado.especialidade.id, dado.especialidade.nome)
          : null;
      dadoDeProfissao.grauDeInstrucao = dado.grauDeInstrucao;

      return dadoDeProfissao;
    });
  }

  isProfissional = (): boolean => this.tipoUsuario == TIPO_USUARIO.PROFISSIONAL;
  isPaciente = (): boolean => this.tipoUsuario == TIPO_USUARIO.PACIENTE;
  isPessoaJuridica = (): boolean =>
    this.tipoUsuario == TIPO_USUARIO.PESSOA_JURIDICA;
}
