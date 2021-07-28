import { WeekDay } from "@angular/common";
import { DateUtils } from "src/app/utils/date-utils";
import { StringUtils } from "src/app/utils/string-utils";

export class ExpedienteDePessoaFisica {
    constructor(
        public dadosDeProfissaoID: number,
        public pessoaJuridicaID: number,
        public diaDaSemana: WeekDay,
        public recorrencia: number,
        public inicio: string,
        public termino: string,
    ) { }

    get diaDaSemanaNome(): string {
        const nome = DateUtils.diaDaSemanaNome(this.diaDaSemana);
        return StringUtils.capilatize(nome);
    }
}