export class DRQRoutes {
  LOGIN = 'login';
  PESSOA_FISICA = 'pessoa_fisica';
  PESSOA_JURIDICA = 'pessoa_juridica';
  AGENDA = 'agenda';
  AGENDAR = 'agendar';
  CONFIG_DADOS = 'config_dados';
  EDIT_ATENDIMENTO = 'edit_atendimento';
  EDIT_DADOS_CONTA = 'edit_dados_conta';
  EDIT_DADOS_PROFISSIONAIS = 'edit_dados_profissionais';
  EDIT_DADOS_BANCARIOS = 'edit_dados_bancarios';
  EDIT_DADOS_PLANO_SAUDE = 'edit_dados_planos_saude';
  EDIT_DADOS_EXPEDIENTE = 'edit_dados_expediente';
  EDIT_REQUISICAO_DADOS = 'edit_requisicao';
  EDIT_UNIDADE = 'edit_unidade';
  EDIT_EXPEDIENTE = 'edit_expediente';
  EDIT_RECEITA = 'edit_receita';
  EDIT_ATESTADO = 'edit_atestado';
  EDIT_PRONTUARIO = 'edit_prontuario';
  LIST_EXPEDIENTES = 'list_dados_expediente';
  LIST_RECEITAS = 'list_receitas';
  LIST_ATESTADOS = 'list_atestados';
  LIST_PRONTUARIOS = 'list_prontuarios';
  LIST_REQUISICOES_DADOS = 'list_requisicoes';
  LIST_UNIDADES = 'list_unidades';

  PARAM_INDEX_DADO_PROFISSAO = 'index_dado_profissao';
  PARAM_INDEX_DADO_EXPEDIENTE = 'index_dado_expediente';
  PARAM_INDEX_DADO_BANCARIO = 'index_dado_bancario';
  PARAM_INDEX_DADO_PLANO_SAUDE = 'index_dado_plano_saude';
  PARAM_REQUISICAO_DADO = 'requisicao_dado';
}

export class URLs {
  BASE_URL_PROD = 'google.com';
  BASE_URL_DEV = 'google.com';
}

export enum STATUS_REQUISICAO_DADO {
  AUTORIZADO = 0,
  NAO_AUTORIZADO = 1,
}
export enum STATUS_DADOS {
  ATIVO = 0,
  INATIVO = 1,
}
export enum STATUS_OBJETO {
  ATIVO = 0,
  INATIVO = 1,
}
export enum STATUS_ATENDIMENTO {
  AGENDADO = 'a',
  CONFIRMADO = 'c',
  FINALIZADO = 'f',
}
export enum STATUS_REQUISICAO_HTTP {
  VAZIO,
  AGUARDANDO,
  CONCLUIDO,
  ERRO,
}
export enum TIPO_PESSOA_JURIDICA {
  MATRIZ = 0,
  FILIAL = 1,
}
export enum TIPO_REQUISICAO_DADOS {
  PROFISSAO = 'Dados de Profissão',
  BANCARIO = 'Dados Bancários',
  PLANO_SAUDE = 'Dados de Plano de Saúde',
  DEPENDENTE = 'Dados de Dependente',
}
