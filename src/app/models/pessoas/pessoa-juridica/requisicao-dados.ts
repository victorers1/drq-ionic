import { STATUS_REQUISICAO } from "src/app/constants";
import { DateUtils } from "src/app/utils/date-utils";

export class RequisicaoDados {
    constructor(
        public data: Date = new Date(),
        public status = STATUS_REQUISICAO.NAO_AUTORIZADO,
    ) { }

    getDataFormatada = (): string => DateUtils.getDataFormatada(this.data);
}