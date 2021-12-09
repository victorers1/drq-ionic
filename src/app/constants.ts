export class DRQRoutes {
  LOGIN = 'login';
  CADASTRO_PESSOA_FISICA = 'cadastro-pessoa-fisica';
  SELECT_TIPO_USUARIO = 'select-tipo-usuario';
  PESSOA_FISICA_PACIENTE = 'pessoa-fisica-paciente';
  PESSOA_FISICA_PROFISSIONAL = 'pessoa-fisica-profissional';
  PESSOA_JURIDICA = 'pessoa-juridica';
  AGENDA = 'agenda';
  AGENDAR = 'agendar';
  CONFIG_DADOS = 'config-dados';
  EDIT_ATENDIMENTO = 'edit-atendimento';
  EDIT_DADOS_CONTA = 'edit-dados-conta';
  EDIT_DADOS_PROFISSIONAIS = 'edit-dados-profissionais';
  EDIT_DADOS_BANCARIOS = 'edit-dados-bancarios';
  EDIT_DADOS_PLANO_SAUDE = 'edit-dados-planos-saude';
  EDIT_DADOS_EXPEDIENTE = 'edit-dados-expediente';
  EDIT_REQUISICAO_DADOS = 'edit-requisicao';
  EDIT_UNIDADE = 'edit-unidade';
  EDIT_EXPEDIENTE = 'edit-expediente';
  EDIT_RECEITA = 'edit-receita';
  EDIT_ATESTADO = 'edit-atestado';
  EDIT_PRONTUARIO = 'edit-prontuario';
  LIST_EXPEDIENTES = 'list-dados-expediente';
  LIST_RECEITAS = 'list-receitas';
  LIST_ATESTADOS = 'list-atestados';
  LIST_PRONTUARIOS = 'list-prontuarios';
  LIST_REQUISICOES_DADOS = 'list-requisicoes';
  LIST_UNIDADES = 'list-unidades';

  PARAM_INDEX_DADO_PROFISSAO = 'index_dado_profissao';
  PARAM_INDEX_DADO_EXPEDIENTE = 'index_dado_expediente';
  PARAM_INDEX_DADO_BANCARIO = 'index_dado_bancario';
  PARAM_INDEX_DADO_PLANO_SAUDE = 'index_dado_plano_saude';
  PARAM_REQUISICAO_DADO = 'requisicao_dado';
}

export enum STATUS_REQUISICAO_DADO {
  AUTORIZADO = 0,
  NAO_AUTORIZADO = 1,
}
export enum STATUS_ENTIDADE {
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
export enum TIPO_USUARIO {
  PACIENTE = 0,
  PROFISSIONAL = 1,
  PESSOA_JURIDICA = 2,
  INVALIDO = 3,
}

export enum SEXO {
  MASCULINO = 0,
  FEMININO = 1,
  OUTRO = 2,
  PREFERE_NAO_DIZER = 3,
}
