export interface IPessoaFisica {
  nome: string;
  docfiscal: string;
  rg: string;
  email: string;
  foneum: string;
  endlogradouro: string;
  endcomplemento: string;
  endnumero: string;
  endbairro: string;
  endcidade: string;
  endestado: string;
  endpais: string;
  datadenascimento: number;
  sexo: number;
  id: number;
  endcep: string;
  role: string;
  version: number;
  createdat: number;
  user: string;
  classUID: string;
  status: number;
}

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

export interface IConfigDadosDeProfissao {
  DadosDeProfissao: IDadosDeProfissao[];
}

export interface IReadAllProfissao {
  data: IProfissao[];
}

export interface IReadAllEspecialidade {
  data: IEspecialidade[];
}

export interface IUpdateDadosDeProfissao {
  update_DadosDeProfissao_by_pk: IDadosDeProfissao;
}

export interface ICreateDadosDeProfissao {
  id: number;
  situacao: number;
  publico: boolean;
  profissao: number;
  pessoaFisica: number;
  grauDeInstrucao: string;
  especialidade: number;
  conselhoDeClasse: number;
}

export interface IInsertExpedienteDePessoaFisica {
  insert_ExpedienteDePessoaFisica: {
    returning: IExpedienteDePessoaFisica[];
  };
}

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

export interface IDadosDeProfissaoByPK {
  DadosDeProfissao_by_pk: IDadosDeProfissao;
}
export interface IDeleteDadosDeProfissao {
  delete_ExpedienteDePessoaFisica: {
    returning: IExpedienteDePessoaFisica[];
  };
  delete_DadosDeProfissao_by_pk: IDadosProfissao;
}
export interface IPessoaFisicas {
  PessoaFisica: {
    id: number;
    nome: string;
    tipoUsuario: string;
    email: string;
  }[];
}
