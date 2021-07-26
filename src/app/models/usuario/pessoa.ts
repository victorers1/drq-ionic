export abstract class Pessoa {
    public foneUm: string;
    public foneDois: string;
    public endComplemento: string;
    public endCEP: string;
    public docFiscalResponsavel: string;

    constructor(
        public username: string,
        public nome: string,
        public docFiscal: string,
        public email: string,
        public endLogradouro: string,
        public endNumero: string,
        public endBairro: string,
        public endCidade: string,
        public endEstado: string,
        public endPais: string = 'BRASIL',
    ) { }
}