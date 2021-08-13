export class DRQRoutes {
    LOGIN: string = 'login';
    PESSOA_FISICA: string = 'pessoa_fisica';
    PESSOA_JURIDICA: string = 'pessoa_juridica';
    AGENDA: string = 'agenda';
    AGENDAR: string = 'agendar';
    CONFIG_DADOS: string = 'config_dados';
    EDIT_ATENDIMENTO: string = 'edit_atendimento';
    EDIT_DADOS_CONTA: string = 'edit_dados_conta';
    EDIT_DADOS_PROFISSIONAIS: string = 'edit_dados_profissionais';
    EDIT_DADOS_BANCARIOS: string = 'edit_dados_bancarios';
    EDIT_DADOS_PLANO_SAUDE: string = 'edit_dados_planos_saude';
    EDIT_DADOS_EXPEDIENTE: string = 'edit_dados_expediente';
    EDIT_REQUISICAO_DADOS: string = 'edit_requisicao';
    EDIT_UNIDADE: string = 'edit_unidade';
    EDIT_EXPEDIENTE: string = 'edit_expediente';
    EDIT_RECEITA: string = 'edit_receita';
    EDIT_ATESTADO: string = 'edit_atestado';
    EDIT_PRONTUARIO: string = 'edit_prontuario';
    LIST_EXPEDIENTES: string = 'list_dados_expediente';
    LIST_RECEITAS: string = 'list_receitas';
    LIST_ATESTADOS: string = 'list_atestados';
    LIST_PRONTUARIOS: string = 'list_prontuarios';
    LIST_REQUISICOES_DADOS: string = 'list_requisicoes';
    LIST_UNIDADES: string = 'list_unidades';

    PARAM_INDEX_DADO_PROFISSAO: string = 'index_dado_profissao';
    PARAM_INDEX_DADO_EXPEDIENTE: string = 'index_dado_expediente';
    PARAM_INDEX_DADO_BANCARIO: string = 'index_dado_bancario';
    PARAM_INDEX_DADO_PLANO_SAUDE: string = 'index_dado_plano_saude';
    PARAM_REQUISICAO_DADO: string = 'requisicao_dado';
}

export class URLs {
    BASE_URL_PROD: string = 'google.com';
    BASE_URL_DEV: string = 'google.com';
}

export enum STATUS_REQUISICAO_DADO { AUTORIZADO = 0, NAO_AUTORIZADO = 1 };
export enum STATUS_DADOS { ATIVO = 0, INATIVO = 1 };
export enum STATUS_OBJETO { ATIVO = 0, INATIVO = 1 };
export enum STATUS_ATENDIMENTO { AGENDADO = 'a', CONFIRMADO = 'c', FINALIZADO = 'f' };
export enum STATUS_REQUISICAO_HTTP { VAZIO, AGUARDANDO, CONCLUIDO, ERRO };
export enum TIPO_PESSOA_JURIDICA { MATRIZ = 0, FILIAL = 1 };
export enum TIPO_REQUISICAO_DADOS { PROFISSAO = 'Dados de Profissão', BANCARIO = 'Dados Bancários', PLANO_SAUDE = 'Dados de Plano de Saúde', DEPENDENTE = 'Dados de Dependente' };