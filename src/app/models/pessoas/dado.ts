/**
 * Classe mãe de DadosDeProfissao, DadosBancarios... Ou seja, DadosDeAlgumaCoisa em geral.
 */

import { STATUS_ENTIDADE } from 'src/app/constants';

export abstract class Dado {
  constructor(
    public publico: boolean = false,
    public id?: number,
    public status: STATUS_ENTIDADE = STATUS_ENTIDADE.ATIVO
  ) {}
}
