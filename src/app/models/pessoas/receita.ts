import { DadosDeProfissao } from "./pessoa-fisica/dados-profissao";

export class Receita {
    dadosDeProfissao: DadosDeProfissao;

    constructor(
        public pessoaFisicaID: number,
        public dadosDeProfissaoID: number,
        public receita: string,
        public data: Date,
    ) { }
}