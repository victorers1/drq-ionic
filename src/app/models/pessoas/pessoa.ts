import { STATUS_ENTIDADE } from 'src/app/constants';

export abstract class Pessoa {
  public docFiscalResponsavel: string;
  public agendaID: number;

  constructor(
    public id: number,
    public username: string,
    public nome: string,
    public docFiscal: string,
    public status: STATUS_ENTIDADE = STATUS_ENTIDADE.ATIVO
  ) {}
}
