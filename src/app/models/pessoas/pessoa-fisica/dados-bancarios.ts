import { Dado } from '../dado';

export class DadosBancarios extends Dado {
  public nome: string;
  public codigoDoBanco: string;
  public codigoDaConta: string;
  public codigoDeOperacao: string;
  public codigoDaAgencia: string;

  constructor(public pessoaFisicaID: number) {
    super();
  }
}
