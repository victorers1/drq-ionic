import { STATUS_REQUISICAO } from "src/app/constants";

export class RequisicaoParaDadosDeProfissao {
    constructor(
        public dadosDeProfissaoID: number,
        public pessoaJuridicaID: number,
        public data: Date,
        public status: STATUS_REQUISICAO = STATUS_REQUISICAO.NAO_AUTORIZADO,
    ) { }
}
