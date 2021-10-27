export abstract class Pessoa {
    public docFiscalResponsavel: string;
    public agendaID: number;

    constructor(
        public username: string,
        public nome: string,
        public docFiscal: string,
    ) { }
}