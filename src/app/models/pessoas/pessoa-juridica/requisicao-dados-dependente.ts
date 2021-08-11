import { STATUS_REQUISICAO_DADO } from "src/app/constants";
import { PessoaFisica } from "../pessoa-fisica/pessoa-fisica";
import { RequisicaoDados } from "./requisicao-dados";

export class RequisicaoParaDadosDeDependente extends RequisicaoDados {
    pessoaFisica: PessoaFisica;

    constructor(
        public dadosDeDependenteID: number,
        public pessoaJuridicaID: number,
        status: STATUS_REQUISICAO_DADO = STATUS_REQUISICAO_DADO.NAO_AUTORIZADO,
        data: Date = new Date(),
    ) {
        super(data, status)
    }
}
