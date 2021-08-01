import { Time, WeekDay } from "@angular/common";

export class ExpedienteDePessoaFisica {
    constructor(
        public dadosDeProfissaoID: number,
        public pessoaJuridicaID: number,
        public diaDaSemana: WeekDay,
        public recorrencia: number,
        public inicio: Time,
        public termino: Time,
    ) { }
}