import { STATUS_OBJETO } from 'src/app/constants';

export abstract class Pessoa {
  public docFiscalResponsavel: string;
  public agendaID: number;

  constructor(
    public id: number,
    public username: string,
    public nome: string,
    public docFiscal: string,
    public status: STATUS_OBJETO = STATUS_OBJETO.ATIVO
  ) {}
}
