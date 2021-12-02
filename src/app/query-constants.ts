import { Time, WeekDay } from '@angular/common';
import { gql } from 'apollo-angular';

export interface IPessoaFisicaHome {
  username: string;
  nome: string;
  docFiscal: string;
  rg: string;
  email: string;
  foneUm: string;
  endCEP: string;
  endLogradouro: string;
  endNumero: string;
  endBairro: string;
  endCidade: string;
  endEstado: string;
  endPais: string;
  dataDeNascimento: number;
  sexo: number;
}
export interface IResponseProfissionalHome {
  PessoaFisica_by_pk: IPessoaFisicaHome;
}
export const PROFISSIONAL_HOME_QUERY = gql`
  query MyQuery($id: bigint = "") {
    PessoaFisica_by_pk(id: $id) {
      username
      nome
      docFiscal
      rg
      email
      foneUm
      endCEP
      endLogradouro
      endNumero
      endBairro
      endCidade
      endEstado
      endPais
      dataDeNascimento
      sexo
    }
  }
`;

export interface IProfissao {
  id: number;
  nome: string;
}

export interface IConselhoDeClasse {
  id: number;
  sigla: string;
  nome: string;
}
export interface IEspecialidade {
  id: number;
  nome: string;
}
export interface IDadosDeProfissao {
  id: number;
  Profissao: IProfissao;
  grauDeInstrucao: string;
  Especialidade: IEspecialidade;
  conselhoDeClasse: IConselhoDeClasse;
}

export interface IDadosBancarios {
  id: number;
  nome: string;
  codigoDaConta: string;
  codigoDoBanco: string;
  codigoDeOperacao: string;
  codigoDaAgencia: string;
}

export interface IDadosDePlanoDeSaude {
  id: number;
  nome: string;
  contrato: string;
  registro: string;
}

export interface IDadosDeDependente {
  id: number;
  nome: string;
  docFiscal: string;
  dataDeNascimento: number;
}

export interface IConfigDados {
  DadosDeProfissao: IDadosDeProfissao[];
  DadosBancarios: IDadosBancarios[];
  DadosDePlanoDeSaude: IDadosDePlanoDeSaude[];
  DadosDeDependente: IDadosDeDependente[];
}

export interface IExpedienteDePessoaFisica {
  diaDaSemana: WeekDay;
  recorrencia: number;
  inicio: Time;
  termino: Time;
}

export interface IDadosProfissao {
  profissao: IProfissao;
}

export const CONFIG_DADOS_QUERY = gql`
  query MyQuery($id: bigint = "") {
    DadosDeProfissao(
      where: { PessoaFisica: { id: { _eq: $id } }, situacao: { _eq: 0 } }
    ) {
      id
      conselhoDeClasse
      especialidade
      grauDeInstrucao
      Profissao {
        id
        nome
      }
      ConselhoDeClasse {
        id
        nome
        sigla
      }
      Especialidade {
        id
        nome
      }
    }

    DadosBancarios(
      where: { PessoaFisica: { id: { _eq: $id }, situacao: { _eq: 0 } } }
    ) {
      id
      codigoDaAgencia
      codigoDaConta
      codigoDeOperacao
      codigoDoBanco
      nome
    }

    DadosDePlanoDeSaude(
      where: { PessoaFisica: { id: { _eq: $id } }, situacao: { _eq: 0 } }
    ) {
      contrato
      nome
      registro
      id
    }

    DadosDeDependente(
      where: { PessoaFisica: { id: { _eq: $id }, situacao: { _eq: 0 } } }
    ) {
      dataDeNascimento
      docFiscal
      id
      nome
    }
  }
`;
