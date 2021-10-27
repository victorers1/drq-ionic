import { STATUS_DADOS } from "src/app/constants";
import { Dado } from "../dado";

export class DadosDePlanoDeSaude extends Dado {
    public contrato: string;

    constructor(
        public pessoaFisicaID: number,
        public nome: string,
        public registro: string,
        public status: STATUS_DADOS = STATUS_DADOS.ATIVO,
    ) {
        super();
    }
}