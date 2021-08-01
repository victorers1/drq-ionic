import { STATUS_REQUISICAO } from "src/app/constants";

export class RequisicaoDados {
    constructor(
        public data: Date = new Date(),
        public status: STATUS_REQUISICAO = STATUS_REQUISICAO.NAO_AUTORIZADO,
    ) { }
}