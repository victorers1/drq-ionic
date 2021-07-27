import { Dado } from "../dado";
import { ExpedienteDePessoaFisica } from "./expediente-pessoa-fisica";

export class DadosDeProfissao extends Dado {
    public expedientes: ExpedienteDePessoaFisica[];

    public grauDeInstrucao: string;
    public especialidade: string;
    public conselhoDeClasseID: string;
    public conselhoDeClasse: string;

    constructor(
        public pessoaFisicaID: number = 0,
        public profissao: string,
        public status: number = 0,
    ) {
        super();
    }
}