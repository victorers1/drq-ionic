import { STATUS_OBJETO } from "src/app/constants";
import { Pessoa } from "../pessoa";
import { DadosBancarios } from "./dados-bancarios";
import { DadosDePlanoDeSaude } from "./dados-plano-saude";
import { DadosDeProfissao } from "./dados-profissao";

export class PessoaFisica extends Pessoa {
    public dadosProfissao: DadosDeProfissao[];
    public dadosBancarios: DadosBancarios[];
    public dadosPlanoSaude: DadosDePlanoDeSaude[];

    public rg: string;
    public email: string;
    public endCEP: string;

    constructor(
        username: string,
        nome: string,
        docFiscal: string,
        public foneUm: string,
        public endLogradouro: string,
        public endNumero: string,
        public endBairro: string,
        public endCidade: string,
        public endEstado: string,
        public endPais: string = 'BRASIL',
        public dataDeNascimento: Date = new Date(),
        public sexo: string,
        public status: STATUS_OBJETO = STATUS_OBJETO.ATIVO,
    ) {
        super(
            username,
            nome,
            docFiscal,
        );
    }
}