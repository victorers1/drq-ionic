import { Pessoa } from "../pessoa";

export class PessoaFisica extends Pessoa {
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