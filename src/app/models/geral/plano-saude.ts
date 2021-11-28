import { STATUS_OBJETO } from 'src/app/constants';

export class PlanoDeSaude {
  constructor(
    public id: number,
    public nome: string,
    public status: STATUS_OBJETO = STATUS_OBJETO.ATIVO
  ) {}
}
