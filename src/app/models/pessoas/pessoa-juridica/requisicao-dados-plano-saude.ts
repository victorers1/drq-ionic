import { STATUS_REQUISICAO } from "src/app/constants";
import { RequisicaoDados } from "./requisicao-dados";

export class RequisicaoParaDadosDePlanoDeSaude extends RequisicaoDados {
    constructor(
        public dadosDePlanoDeSaudeID: number,
        public pessoaJuridicaID: number,
        status: STATUS_REQUISICAO = STATUS_REQUISICAO.NAO_AUTORIZADO,
        data: Date = new Date(),
    ) {
        super(data, status);
    }
}