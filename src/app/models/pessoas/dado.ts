/**
 * Classe mãe de DadosDeProfissao, DadosBancarios... Ou seja, DadosDeAlgumaCoisa em geral.
 */

import { STATUS_ENTIDADE } from 'src/app/constants';

export abstract class Dado {
  public id: number;

  constructor(
    public publico: boolean = false,
    public status: STATUS_ENTIDADE = STATUS_ENTIDADE.ATIVO
  ) {}
}
