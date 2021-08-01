import { STATUS_DADOS } from "src/app/constants";
import { Dado } from "../dado";

export class DadosBancarios extends Dado {
    public nome: string;
    public codigoDoBanco: string;
    public codigoDaConta: string;
    public codigoDeOperacao: string;
    public codigoDaAgencia: string;
    public status: STATUS_DADOS = STATUS_DADOS.ATIVO;

    constructor(public pessoaFisicaID: number) {
        super();
    }
}