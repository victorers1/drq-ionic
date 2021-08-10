import { DadosDeProfissao } from "./pessoa-fisica/dados-profissao";
import { PessoaFisica } from "./pessoa-fisica/pessoa-fisica";

export class Atestado {
    pessoaFisica: PessoaFisica;

    constructor(
        public pessoaFisicaID: number,
        public dadosDeProfissao: DadosDeProfissao,
        public atestado: string,
        public data: Date,
    ) { }
}