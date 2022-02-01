export interface YCArray<T> {
  data: T[];
}

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
  profissao: IProfissao;
}
export interface IDado {
  id: number;
  publico: boolean;
  situacao: number;
}
export interface IDadosDeProfissao extends IDado {
  graudeinstrucao: string;
  especialidade: IEspecialidade;
  conselhodeclasse?: IConselhoDeClasse;
  expedientedepessoafisica?: IExpedienteDePessoaFisica[];
  pessoafisica: IPessoaFisica;
}

export interface IExpedienteDePessoaFisica {
  id: number;
  inicio: string;
  termino: string;
  diadasemana: number;
  pessoajuridica: number;
  recorrencia: number;
}
export interface IDadosProfissao {
  profissao: IProfissao;
}

export interface IReadAllProfissao {
  data: IProfissao[];
}

export interface IReadAllEspecialidade {
  data: IEspecialidade[];
}
