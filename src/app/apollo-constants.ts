import { Time, WeekDay } from '@angular/common';
import { gql } from 'apollo-angular';

export interface IPessoaFisicaHome {
  nome: string;
  docFiscal: string;
  rg: string;
  email: string;
  foneUm: string;
  endCEP: string;
  endLogradouro: string;
  endComplemento: string;
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
      nome
      email
      docFiscal
      rg
      sexo
      endLogradouro
      endNumero
      endComplemento
      endCEP
      endBairro
      endCidade
      endEstado
      endPais
      foneUm
      dataDeNascimento
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

export interface IListaProfissao {
  dadosGeral_Profissao: IProfissao[];
}
export const LISTA_PROFISSOES = gql`
  query MyQuery {
    dadosGeral_Profissao {
      id
      nome
    }
  }
`;

export interface IUpdatePessoaFisica {
  update_PessoaFisica_by_pk: IPessoaFisicaHome;
}
export const EDIT_DADOS_PESSOAIS_MUTATION = gql`
  mutation MyMutation(
    $id: bigint = ""
    $nome: String = ""
    $email: String = ""
    $docFiscal: String = ""
    $rg: String = ""
    $sexo: Int = ""
    $endLogradouro: String = ""
    $endNumero: String = ""
    $endComplemento: String = ""
    $endCEP: String = ""
    $endBairro: String = ""
    $endCidade: String = ""
    $endEstado: String = ""
    $foneUm: String = ""
    $dataDeNascimento: bigint = ""
  ) {
    update_PessoaFisica_by_pk(
      pk_columns: { id: $id }
      _set: {
        dataDeNascimento: $dataDeNascimento
        docFiscal: $docFiscal
        email: $email
        endBairro: $endBairro
        endCEP: $endCEP
        endCidade: $endCidade
        endComplemento: $endComplemento
        endEstado: $endEstado
        endLogradouro: $endLogradouro
        endNumero: $endNumero
        foneUm: $foneUm
        nome: $nome
        rg: $rg
        sexo: $sexo
      }
    ) {
      nome
      email
      docFiscal
      rg
      sexo
      endLogradouro
      endNumero
      endComplemento
      endCEP
      endBairro
      endCidade
      endEstado
      endPais
      foneUm
      dataDeNascimento
    }
  }
`;
