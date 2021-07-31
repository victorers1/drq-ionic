import { TIPO_PESSOA_JURIDICA } from "src/app/constants";
import { Pessoa } from "../pessoa";
import { ExpedienteDePessoaFisica } from "../pessoa-fisica/expediente-pessoa-fisica";
import { ExpedienteDePessoaJuridica } from "./expediente-pessoa-juridica";

export class PessoaJuridica extends Pessoa {
    expedienteDePessoaFisica: ExpedienteDePessoaFisica[] = [];
    expedienteDePessoaJuridica: ExpedienteDePessoaJuridica[] = [];

    public status: number = 0;

    constructor(
        username: string,
        nome: string,
        docFiscal: string,
        public nomeFantasia: string,
        public descricao: string,
        public drqEndpoint: string,
        public tipo: TIPO_PESSOA_JURIDICA,
    ) {
        super(
            username,
            nome,
            docFiscal,
        );
    }
}