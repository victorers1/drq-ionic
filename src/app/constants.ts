export class DRQRoutes {
    LOGIN: string = 'login';
    PESSOA_FISICA: string = 'pessoa_fisica';
    PESSOA_JURIDICA: string = 'pessoa_juridica';
    CONFIG_DADOS: string = 'config_dados';
    EDIT_DADOS_CONTA: string = 'edit_dados_conta';
    EDIT_DADOS_PROFISSIONAIS: string = 'edit_dados_profissionais';
    EDIT_DADOS_BANCARIOS: string = 'edit_dados_bancarios';
    EDIT_DADOS_PLANO_SAUDE: string = 'edit_dados_planos_saude';
    EDIT_DADOS_EXPEDIENTE: string = 'edit_dados_expediente';
    LIST_EXPEDIENTES: string = 'ver_dados_expediente';
    LIST_REQUISICOES_DADOS: string = 'ver_requisicoes';
    EDIT_REQUISICAO_DADOS: string = 'edit_requisicao';

    PARAM_DADO_PROFISSAO: string = 'indexDadoProfissao';
    PARAM_DADO_EXPEDIENTE: string = 'indexDadoExpediente';
    PARAM_DADO_BANCARIO: string = 'indexDadoBancario';
    PARAM_DADO_PLANO_SAUDE: string = 'indexDadoPlanoSaude';
}

export class URLs {
    BASE_URL_PROD: string = 'google.com';
    BASE_URL_DEV: string = 'google.com';
}


export enum STATUS_REQUISICAO { AUTORIZADO = 0, NAO_AUTORIZADO = 1 };
export enum STATUS_DADOS { ATIVO = 0, INATIVO = 1 };