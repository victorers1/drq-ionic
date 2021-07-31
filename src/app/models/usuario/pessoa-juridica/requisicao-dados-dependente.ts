import { STATUS_REQUISICAO } from "src/app/constants";

export class RequisicaoParaDadosDeDependente {
    constructor(
        public dadosDeDependenteID: number,
        public pessoaJuridicaID: number,
        public data: Date = new Date(),
        public status: STATUS_REQUISICAO = STATUS_REQUISICAO.NAO_AUTORIZADO,
    ) { }
}
