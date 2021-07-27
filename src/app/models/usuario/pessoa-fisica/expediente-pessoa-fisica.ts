import { WeekDay } from "@angular/common";

export class ExpedienteDePessoaFisica {
    constructor(
        public dadosDeProfissaoID: number,
        public pessoaJuridicaID: number,
        public diaDaSemana: WeekDay,
        public recorrencia: number,
        public inicio: string,
        public termino: string,
    ) { }
}