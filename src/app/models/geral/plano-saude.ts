import { STATUS_ENTIDADE } from 'src/app/constants';

export class PlanoDeSaude {
  constructor(
    public id: number,
    public nome: string,
    public status: STATUS_ENTIDADE = STATUS_ENTIDADE.ATIVO
  ) {}
}
