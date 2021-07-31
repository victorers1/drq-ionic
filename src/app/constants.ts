export class DRQRoutes {
    LOGIN: string = 'login';
    PESSOA_FISICA: string = 'pessoa_fisica';
    PESSOA_JURIDICA: string = 'pessoa_juridica';
    AGENDA: string = 'agenda';
    CONFIG_DADOS: string = 'config_dados';
    EDIT_DADOS_CONTA: string = 'edit_dados_conta';
    EDIT_DADOS_PROFISSIONAIS: string = 'edit_dados_profissionais';
    EDIT_DADOS_BANCARIOS: string = 'edit_dados_bancarios';
    EDIT_DADOS_PLANO_SAUDE: string = 'edit_dados_planos_saude';
    EDIT_DADOS_EXPEDIENTE: string = 'edit_dados_expediente';
    LIST_EXPEDIENTES: string = 'list_dados_expediente';
    LIST_RECEITAS: string = 'list_receitas';
    LIST_ATESTADOS: string = 'list_atestados';
    LIST_PRONTUARIOS: string = 'list_prontuarios';
    LIST_REQUISICOES_DADOS: string = 'list_requisicoes';
    EDIT_REQUISICAO_DADOS: string = 'edit_requisicao';

    PARAM_DADO_PROFISSAO: string = 'index_dado_profissao';
    PARAM_DADO_EXPEDIENTE: string = 'index_dado_expediente';
    PARAM_DADO_BANCARIO: string = 'index_dado_bancario';
    PARAM_DADO_PLANO_SAUDE: string = 'index_dado_planoSaude';
}

export class URLs {
    BASE_URL_PROD: string = 'google.com';
    BASE_URL_DEV: string = 'google.com';
}

export enum STATUS_REQUISICAO { AUTORIZADO = 0, NAO_AUTORIZADO = 1 };
export enum STATUS_DADOS { ATIVO = 0, INATIVO = 1 };
export enum STATUS_OBJETO { ATIVO = 0, INATIVO = 1 };
export enum TIPO_PESSOA_JURIDICA { MATRIZ = 0, FILIAL = 1 };