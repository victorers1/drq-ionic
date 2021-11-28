import { STATUS_OBJETO } from 'src/app/constants';

export class Banco {
  constructor(
    public id: number,
    public nome: string,
    public codigo: number,
    public status: STATUS_OBJETO = STATUS_OBJETO.ATIVO
  ) {}
}
