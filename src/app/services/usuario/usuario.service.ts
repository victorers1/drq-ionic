import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core/types';
import { Apollo } from 'apollo-angular';
import { TIPO_USUARIO } from 'src/app/constants';
import { ConselhoDeClasse } from 'src/app/models/geral/conselho_de_classe';
import { Especialidade } from 'src/app/models/geral/especialidade';
import { Profissao } from 'src/app/models/geral/profissao';
import { DadosDeProfissao } from 'src/app/models/pessoas/pessoa-fisica/dados-profissao';
import {
  IConfigDados,
  IDadosDeProfissao,
  IExpedienteDePessoaFisica,
} from 'src/app/apollo-constants';
import { PacienteService } from './paciente.service';
import { PessoaJuridicaService } from './pessoa-juridica.service';
import { ProfissionalService } from './profissional.service';
import { ExpedienteDePessoaFisica } from 'src/app/models/pessoas/pessoa-fisica/expediente-pessoa-fisica';
import { DateUtils } from 'src/app/utils/date-utils';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  tipoUsuario: TIPO_USUARIO;

  constructor(
    private pacienteService: PacienteService,
    private profissionalService: ProfissionalService,
    private pessoaJuridicaService: PessoaJuridicaService
  ) {
    // ! Setar tipoUsuario
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
  mapDadosDeProfissaoFromResult(
    dadosDeProfissoes: IDadosDeProfissao[],
    idPessoa: number
  ): DadosDeProfissao[] {
    return dadosDeProfissoes.map<DadosDeProfissao>((dado) => {
      const dadoDeProfissao = new DadosDeProfissao(
        idPessoa,
        new Profissao(dado.Profissao.id, dado.Profissao.nome)
      );
      dadoDeProfissao.id = dado.id;
      dadoDeProfissao.publico = dado.publico;
      dadoDeProfissao.conselhoDeClasse =
        dado.conselhoDeClasse != null
          ? new ConselhoDeClasse(
              dado.conselhoDeClasse.id,
              dado.conselhoDeClasse.sigla,
              dado.conselhoDeClasse.nome
            )
          : null;

      dadoDeProfissao.especialidade =
        dado.Especialidade != null
          ? new Especialidade(dado.Especialidade.id, dado.Especialidade.nome)
          : null;
      dadoDeProfissao.grauDeInstrucao = dado.grauDeInstrucao;

      dadoDeProfissao.expedientes =
        dado.ExpedienteDePessoaFisicas != null
          ? this.mapExpedienteFromResult(
              dadoDeProfissao,
              dado.ExpedienteDePessoaFisicas
            )
          : null;

      return dadoDeProfissao;
    });
  }

  mapExpedienteFromResult(
    dadosDeprofissao: DadosDeProfissao,
    expedientes: IExpedienteDePessoaFisica[]
  ) {
    return (dadosDeprofissao.expedientes = expedientes.map((exp) => {
      return new ExpedienteDePessoaFisica(
        dadosDeprofissao.id,
        exp.pessoaJuridica,
        exp.diaDaSemana,
        exp.recorrencia,
        DateUtils.getTimeFromString(exp.inicio),
        DateUtils.getTimeFromString(exp.termino)
      );
    }));
  }

  isProfissional = (): boolean => this.tipoUsuario == TIPO_USUARIO.PROFISSIONAL;
  isPaciente = (): boolean => this.tipoUsuario == TIPO_USUARIO.PACIENTE;
  isPessoaJuridica = (): boolean =>
    this.tipoUsuario == TIPO_USUARIO.PESSOA_JURIDICA;
}
