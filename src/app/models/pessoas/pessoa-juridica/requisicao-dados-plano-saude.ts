import { STATUS_REQUISICAO } from "src/app/constants";
import { PessoaFisica } from "../pessoa-fisica/pessoa-fisica";
import { RequisicaoDados } from "./requisicao-dados";

export class RequisicaoParaDadosDePlanoDeSaude extends RequisicaoDados {
    pessoaFisica: PessoaFisica; // TODO: verificar se pessoa física deve ser armazenada aqui

    constructor(
        public dadosDePlanoDeSaudeID: number,
        public pessoaJuridicaID: number,
        status: STATUS_REQUISICAO = STATUS_REQUISICAO.NAO_AUTORIZADO,
        data: Date = new Date(),
    ) {
        super(data, status);
    }
}