import { Pessoa } from "../pessoa";
import { ExpedienteDePessoaFisica } from "../pessoa-fisica/expediente-pessoa-fisica";

export class PessoaJuridica extends Pessoa {
    expedienteDePessoaFisica: ExpedienteDePessoaFisica[] = [];
    expediente

    public status: number = 0;

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
        public nomeFantasia: string,
        public descricao: string,
        public especialidades: string,
        public drqEndpoint: string,
        public tipo: number,
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