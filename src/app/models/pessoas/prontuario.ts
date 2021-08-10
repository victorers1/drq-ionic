import { DadosDePlanoDeSaude } from "./pessoa-fisica/dados-plano-saude";
import { PessoaFisica } from "./pessoa-fisica/pessoa-fisica";

export class Prontuario {
    pessoaFisica: PessoaFisica;

    constructor(
        public pessoaFisicaID: number,
        public dadosDePlanoDeSaude: DadosDePlanoDeSaude,
        public procedimentoId: number,
        public anotacao: string,
        public data: Date,
    ) { }
}