import { STATUS_ENTIDADE } from 'src/app/constants';

export class Banco {
  constructor(
    public id: number,
    public nome: string,
    public codigo: number,
    public status: STATUS_ENTIDADE = STATUS_ENTIDADE.ATIVO
  ) {}
}
