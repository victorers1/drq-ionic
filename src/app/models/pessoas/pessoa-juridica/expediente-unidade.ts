import { Time, WeekDay } from "@angular/common";

export class ExpedienteDeUnidade {
    constructor(
        public pessoaJuridicaID: number,
        public diaDaSemana: WeekDay,
        public recorrencia: number,
        public inicio: Time,
        public termino: Time,
    ) { }
}