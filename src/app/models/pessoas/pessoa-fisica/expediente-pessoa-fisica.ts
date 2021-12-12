import { Time, WeekDay } from '@angular/common';
import { DateUtils, diaDaSemanaOptions } from 'src/app/utils/date-utils';

export class ExpedienteDePessoaFisica {
  id: number;

  constructor(
    public dadosDeProfissaoID: number,
    public pessoaJuridicaID: number,
    public diaDaSemana: WeekDay,
    public recorrencia: number,
    public inicio: Time,
    public termino: Time
  ) {}

  getDiaSemanaFormatado = (): string =>
    DateUtils.diaDaSemanaNome(this.diaDaSemana, { capitalize: true });

  getInicioFormatado = (): string => DateUtils.getTimeFormatado(this.inicio);

  getTerminoFormatado = (): string => DateUtils.getTimeFormatado(this.termino);
}
