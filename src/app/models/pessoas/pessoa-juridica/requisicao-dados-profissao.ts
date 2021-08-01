import { STATUS_REQUISICAO } from "src/app/constants";
import { PessoaFisica } from "../pessoa-fisica/pessoa-fisica";
import { PessoaJuridica } from "./pessoa-juridica";
import { RequisicaoDados } from "./requisicao-dados";

export class RequisicaoParaDadosDeProfissao extends RequisicaoDados {

    pessoaFisica: PessoaFisica; // TODO: verificar se pessoa física deve ser armazenada aqui

    constructor(
        public dadosDeProfissaoID: number,
        public pessoaJuridicaID: number,
        status: STATUS_REQUISICAO = STATUS_REQUISICAO.NAO_AUTORIZADO,
        data: Date = new Date(),
    ) {
        super(data, status,);
    }
}
