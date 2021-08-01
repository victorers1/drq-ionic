import { Time, WeekDay } from "@angular/common";
import { DateUtils } from "src/app/utils/date-utils";
import { StringUtils } from "src/app/utils/string-utils";

export class ExpedienteDePessoaJuridica {
    constructor(
        public pessoaJuridicaID: number,
        public diaDaSemana: WeekDay,
        public recorrencia: number,
        public inicio: Time,
        public termino: Time,
    ) { }
}