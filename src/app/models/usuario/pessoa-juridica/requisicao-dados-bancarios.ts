import { STATUS_REQUISICAO } from "src/app/constants";

export class RequisicaoParaDadosBancarios {
    constructor(
        public dadosBancariosID: number,
        public pessoaJuridicaID: number,
        public data: Date = new Date(),
        public status: STATUS_REQUISICAO = STATUS_REQUISICAO.NAO_AUTORIZADO,
    ) { }
}