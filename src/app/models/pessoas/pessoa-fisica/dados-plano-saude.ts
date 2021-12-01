import { STATUS_ENTIDADE } from 'src/app/constants';
import { Dado } from '../dado';

export class DadosDePlanoDeSaude extends Dado {
  public contrato: string;

  constructor(
    public pessoaFisicaID: number,
    public nome: string,
    public registro: string
  ) {
    super();
  }
}
