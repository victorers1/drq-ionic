import { TIPO_PESSOA_JURIDICA } from "../../../constants";
import { Pessoa } from "../pessoa";
import { ExpedienteDePessoaFisica } from "../pessoa-fisica/expediente-pessoa-fisica";
import { Unidade } from "../unidade";
import { RequisicaoParaDadosBancarios } from "./requisicao-dados-bancarios";
import { RequisicaoParaDadosDeDependente } from "./requisicao-dados-dependente";
import { RequisicaoParaDadosDePlanoDeSaude } from "./requisicao-dados-plano-saude";
import { RequisicaoParaDadosDeProfissao } from "./requisicao-dados-profissao";

export class PessoaJuridica extends Pessoa {
    unidades: Unidade[] = [];
    expedienteDePessoaFisica: ExpedienteDePessoaFisica[] = [];

    requisicoesDadosProfissao: RequisicaoParaDadosDeProfissao[] = [];
    requisicoesDadosPlanoSaude: RequisicaoParaDadosDePlanoDeSaude[] = [];
    requisicoesDadosBancarios: RequisicaoParaDadosBancarios[] = [];
    requisicoesDadosDependentes: RequisicaoParaDadosDeDependente[] = [];

    public status: number = 0;

    constructor(
        username: string,
        nome: string,
        docFiscal: string,
        public nomeFantasia: string,
        public descricao: string,
        public drqEndpoint: string,
        public tipo: TIPO_PESSOA_JURIDICA,
    ) {
        super(
            username,
            nome,
            docFiscal,
        );
    }
}