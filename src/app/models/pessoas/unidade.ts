import { ExpedienteDeUnidade } from "./pessoa-juridica/expediente-unidade";
import { PessoaJuridica } from "./pessoa-juridica/pessoa-juridica";

export class Unidade {

    public email: string;
    public endCEP: string;
    public endPais: string = 'BRASIL';
    public expedientes: ExpedienteDeUnidade[] = [];

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