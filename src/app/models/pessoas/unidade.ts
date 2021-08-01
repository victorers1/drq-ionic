import { PessoaJuridica } from "./pessoa-juridica/pessoa-juridica";

export class Unidade {
    public email: string;
    public endPais: string = 'BRASIL';
    public endCEP: string;

    constructor(
        public pessoaJuridica: PessoaJuridica,
        public nome: string,
        public especialidades: string,
        public foneUm: string,
        public endLogradouro: string,
        public endNumero: string,
        public endComplemento: string,
        public endBairro: string,
        public endCidade: string,
        public endEstado: string,
    ) { }
}