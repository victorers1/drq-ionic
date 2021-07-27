import { Pessoa } from "../pessoa";
import { DadosBancarios } from "./dados-bancarios";
import { DadosDePlanoDeSaude } from "./dados-plano-saude";
import { DadosDeProfissao } from "./dados-profissao";

export class PessoaFisica extends Pessoa {
    public dadosProfissao: DadosDeProfissao[];
    public dadosBancarios: DadosBancarios[];
    public dadosPlanoSaude: DadosDePlanoDeSaude[];

    public rg: string;

    constructor(
        username: string,
        nome: string,
        docFiscal: string,
        email: string,
        endLogradouro: string,
        endNumero: string,
        endBairro: string,
        endCidade: string,
        endEstado: string,
        endPais: string,
        public dataDeNascimento: Date = new Date(),
        public sexo: string,
        public status: number = 0,
    ) {
        super(
            username,
            nome,
            docFiscal,
            email,
            endLogradouro,
            endNumero,
            endBairro,
            endCidade,
            endEstado,
            endPais,
        );
    }
}