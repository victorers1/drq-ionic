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
export interface IDado {
  id: number;
  publico: boolean;
  situacao: number;
}
export interface IDadosDeProfissao extends IDado {
  Profissao: IProfissao;
  grauDeInstrucao: string;
  Especialidade: IEspecialidade;
  conselhoDeClasse: IConselhoDeClasse;
  ExpedienteDePessoaFisicas: IExpedienteDePessoaFisica[];
}
export interface IDadosBancarios extends IDado {
  nome: string;
  codigoDaConta: string;
  codigoDoBanco: string;
  codigoDeOperacao: string;
  codigoDaAgencia: string;
}
export interface IDadosDePlanoDeSaude extends IDado {
  nome: string;
  contrato: string;
  registro: string;
}
export interface IDadosDeDependente extends IDado {
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
  id: number;
  inicio: string;
  termino: string;
  pessoaJuridica: number;
  diaDaSemana: number;
  recorrencia: number;
  dadosDeProfissao: number;
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
      publico
      especialidade
      conselhoDeClasse
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
      nome
      publico
      codigoDaAgencia
      codigoDaConta
      codigoDeOperacao
      codigoDoBanco
    }

    DadosDePlanoDeSaude(
      where: { PessoaFisica: { id: { _eq: $id } }, situacao: { _eq: 0 } }
    ) {
      id
      nome
      publico
      registro
      contrato
    }

    DadosDeDependente(
      where: { PessoaFisica: { id: { _eq: $id }, situacao: { _eq: 0 } } }
    ) {
      id
      nome
      publico
      docFiscal
      dataDeNascimento
    }
  }
`;

export interface IListaProfissao {
  dadosGeral_Profissao: IProfissao[];
}
export const LISTA_PROFISSOES_QUERY = gql`
  query MyQuery {
    dadosGeral_Profissao {
      id
      nome
    }
  }
`;

export interface IListaEspecialidade {
  dadosGeral_Especialidade: IEspecialidade[];
}
export const LISTA_ESPECIALIDADES_QUERY = gql`
  query MyQuery($id: Int = 0) {
    dadosGeral_Especialidade(where: { profissao: { _eq: $id } }) {
      id
      nome
    }
  }
`;

export interface IUpdatePessoaFisica {
  update_PessoaFisica_by_pk: IPessoaFisicaHome;
}
export const UPDATE_DADOS_PESSOAIS = gql`
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

export interface IUpdateDadosDeProfissao {
  update_DadosDeProfissao_by_pk: IDadosDeProfissao;
}

export const UPDATE_DADOS_DE_PROFISSAO = gql`
  mutation MyMutation(
    $id: Int = 0
    $profissao: Int = 0
    $conselhoDeClasse: Int = null
    $especialidade: Int = 0
    $grauDeInstrucao: String = ""
    $situacao: Int = 0
    $publico: Boolean = false
  ) {
    update_DadosDeProfissao_by_pk(
      pk_columns: { id: $id }
      _set: {
        profissao: $profissao
        conselhoDeClasse: $conselhoDeClasse
        especialidade: $especialidade
        grauDeInstrucao: $grauDeInstrucao
        situacao: $situacao
        publico: $publico
      }
    ) {
      id
      publico
      situacao
      profissao
      pessoaFisica
      especialidade
      grauDeInstrucao
      conselhoDeClasse
    }
  }
`;

export const INSERT_EXPEDIENTE_DE_PESSOA_FISICA = gql`
  mutation MyMutation(
    $inicio: String = ""
    $termino: String = ""
    $recorrencia: Int = 0
    $dadosDeProfissao: Int = 0
    $diaDaSemana: Int = 0
  ) {
    insert_ExpedienteDePessoaFisica_one(
      object: {
        inicio: $inicio
        recorrencia: $recorrencia
        termino: $termino
        dadosDeProfissao: $dadosDeProfissao
        diaDaSemana: $diaDaSemana
      }
    ) {
      termino
      recorrencia
      inicio
      id
      diaDaSemana
      dadosDeProfissao
    }
  }
`;

export const UPDATE_EXPEDIENTE_DE_PESSOA_FISICA = gql`
  mutation MyMutation(
    $id: Int = 0
    $dadosDeProfissao: Int = 0
    $diaDaSemana: Int = 0
    $inicio: String = ""
    $recorrencia: Int = 0
    $termino: String = ""
    $pessoaJuridica: Int = 0
  ) {
    update_ExpedienteDePessoaFisica_by_pk(
      pk_columns: { id: $id }
      _set: {
        dadosDeProfissao: $dadosDeProfissao
        diaDaSemana: $diaDaSemana
        inicio: $inicio
        pessoaJuridica: $pessoaJuridica
        recorrencia: $recorrencia
        termino: $termino
      }
    ) {
      id
    }
  }
`;

export interface IInsertDadosDeProfissao {
  insert_DadosDeProfissao_one: {
    id: number;
    situacao: number;
    publico: boolean;
    profissao: number;
    pessoaFisica: number;
    grauDeInstrucao: string;
    especialidade: number;
    conselhoDeClasse: number;
  };
}
export interface IInsertExpedienteDePessoaFisica {
  insert_ExpedienteDePessoaFisica: {
    returning: IExpedienteDePessoaFisica[];
  };
}

export const INSERT_EXPEDIENTE_PESSOA_FISICA = gql`
  mutation MyMutation2(
    $inicio: String = ""
    $pessoaJuridica: Int = 0
    $termino: String = ""
    $recorrencia: Int = 0
    $diaDaSemana: Int = 0
    $dadosDeProfissao: Int = 0
  ) {
    insert_ExpedienteDePessoaFisica(
      objects: [
        {
          inicio: $inicio
          pessoaJuridica: $pessoaJuridica
          termino: $termino
          recorrencia: $recorrencia
          diaDaSemana: $diaDaSemana
          dadosDeProfissao: $dadosDeProfissao
        }
      ]
    ) {
      returning {
        id
        inicio
        pessoaJuridica
        recorrencia
        termino
        diaDaSemana
        dadosDeProfissao
      }
    }
  }
`;
export const INSERT_DADO_DE_PROFISSAO = gql`
  mutation MyMutation(
    $pessoaFisica: Int = 0
    $especialidade: Int = 0
    $grauDeInstrucao: String = ""
    $profissao: Int = 0
    $publico: Boolean = false
    $situacao: Int = 0
  ) {
    insert_DadosDeProfissao_one(
      object: {
        pessoaFisica: $pessoaFisica
        profissao: $profissao
        publico: $publico
        situacao: $situacao
        especialidade: $especialidade
        grauDeInstrucao: $grauDeInstrucao
      }
    ) {
      situacao
      publico
      profissao
      pessoaFisica
      grauDeInstrucao
      especialidade
      conselhoDeClasse
      id
    }
  }
`;

export interface IExpedienteDePessoaFisicaByPK {
  ExpedienteDePessoaFisica_by_pk: {
    dadosDeProfissao: number;
    diaDaSemana: number;
    id: number;
    inicio: string;
    pessoaJuridica: number;
    recorrencia: number;
    termino: string;
    PessoaJuridica: {
      id: number;
    };
    DadosDeProfissao: {
      id: number;
    };
  };
}

export const EXPEDIENTE_DE_PESSOA_FISICA_QUERY = gql`
  query MyQuery($id: Int = 0) {
    ExpedienteDePessoaFisica_by_pk(id: $id) {
      dadosDeProfissao
      diaDaSemana
      id
      inicio
      pessoaJuridica
      recorrencia
      termino
      PessoaJuridica {
        id
      }
      DadosDeProfissao {
        id
      }
    }
  }
`;

export interface IDadosDeProfissaoByPK {
  DadosDeProfissao_by_pk: IDadosDeProfissao;
}
export const EDIT_DADOS_DE_PROFISSAO_QUERY = gql`
  query MyQuery($id: Int = 0) {
    DadosDeProfissao_by_pk(id: $id) {
      situacao
      publico
      pessoaFisica
      id
      grauDeInstrucao
      conselhoDeClasse
      ExpedienteDePessoaFisicas {
        termino
        recorrencia
        pessoaJuridica
        inicio
        id
        diaDaSemana
        dadosDeProfissao
      }
      Profissao {
        id
        nome
      }
      Especialidade {
        id
        nome
      }
    }
  }
`;

export interface IDeleteDadosDeProfissao {
  delete_ExpedienteDePessoaFisica: {
    returning: IExpedienteDePessoaFisica[];
  };
  delete_DadosDeProfissao_by_pk: IDadosProfissao;
}
export const DELETE_DADOS_DE_PROFISSAO = gql`
  mutation MyMutation($id: Int = 0) {
    delete_ExpedienteDePessoaFisica(
      where: { DadosDeProfissao: { id: { _eq: $id } } }
    ) {
      returning {
        diaDaSemana
        id
        inicio
        pessoaJuridica
        recorrencia
        termino
      }
    }
    delete_DadosDeProfissao_by_pk(id: $id) {
      id
      situacao
      publico
      pessoaFisica
      grauDeInstrucao
      conselhoDeClasse
      Profissao {
        id
        nome
      }
      Especialidade {
        nome
        id
      }
    }
  }
`;
