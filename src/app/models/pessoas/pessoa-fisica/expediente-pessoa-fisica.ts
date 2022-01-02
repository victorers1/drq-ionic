import { Time, WeekDay } from '@angular/common';
import { IExpedienteDePessoaFisica } from 'src/app/apollo-constants';
import { DateUtils, diaDaSemanaOptions } from 'src/app/utils/date-utils';

export class ExpedienteDePessoaFisica {
  id: number;

  constructor(
    public dadosDeProfissaoID: number,
    public pessoaJuridicaID: number = 1,
    public diaDaSemana: WeekDay,
    public recorrencia: number,
    public inicio: Time,
    public termino: Time
  ) {}

  getDiaSemanaFormatado = (): string =>
    DateUtils.diaDaSemanaNome(this.diaDaSemana, { capitalize: true });

  getInicioFormatado = (): string => DateUtils.getTimeFormatado(this.inicio);

  getTerminoFormatado = (): string => DateUtils.getTimeFormatado(this.termino);

  toHasuraObject(): IExpedienteDePessoaFisica {
    return {
      id: null,
      dadosDeProfissao: this.dadosDeProfissaoID,
      diaDaSemana: this.diaDaSemana.valueOf(),
      inicio: DateUtils.getTimeFormatado(this.inicio),
      termino: DateUtils.getTimeFormatado(this.termino),
      pessoaJuridica: 1,
      recorrencia: this.recorrencia,
    };
  }
}
