import { Time, WeekDay } from '@angular/common';
import { StringUtils } from './string-utils';

export interface diaDaSemanaOptions {
  toUpperCase?: boolean;
  capitalize?: boolean;
  completo?: boolean;
}

export class DateUtils {
  static diasSemana: Array<WeekDay> = [
    WeekDay.Sunday,
    WeekDay.Monday,
    WeekDay.Tuesday,
    WeekDay.Wednesday,
    WeekDay.Thursday,
    WeekDay.Friday,
    WeekDay.Saturday,
  ];

  static getDataFormatada(data: Date, separador: string = '/') {
    const dia = StringUtils.pad(data.getDate());
    const mes = StringUtils.pad(data.getMonth());
    return `${dia}${separador}${mes}${separador}${data.getFullYear()}`;
  }

  static getHoraFormatada(
    data: Date,
    separador: string = ':',
    incluiSegundo: boolean = false
  ): string {
    const hora = StringUtils.pad(data.getHours());
    const minuto = StringUtils.pad(data.getMinutes());

    let horaFormatada = `${hora}${separador}${minuto}`;

    if (incluiSegundo) {
      const segundo = StringUtils.pad(data.getSeconds());
      horaFormatada += `${separador}${segundo}`;
    }

    return horaFormatada;
  }

  static getDataHoraFormatada(
    data: Date,
    separadorData?: string,
    separadorHora?: string,
    incluiSegundo?: boolean
  ): string {
    return `${this.getDataFormatada(
      data,
      separadorData
    )} ${this.getHoraFormatada(data, separadorHora, incluiSegundo)}`;
  }

  static diaDaSemanaNome(
    dia: WeekDay,
    opcoes: diaDaSemanaOptions = {
      toUpperCase: false,
      capitalize: false,
      completo: false,
    }
  ): string {
    let nome: string;
    switch (dia) {
      case WeekDay.Sunday:
        nome = 'domingo';
        break;

      case WeekDay.Monday:
        nome = 'segunda' + (opcoes.completo ? '-feira' : '');
        break;

      case WeekDay.Tuesday:
        nome = 'terça' + (opcoes.completo ? '-feira' : '');
        break;

      case WeekDay.Wednesday:
        nome = 'quarta' + (opcoes.completo ? '-feira' : '');
        break;

      case WeekDay.Thursday:
        nome = 'quinta' + (opcoes.completo ? '-feira' : '');
        break;

      case WeekDay.Friday:
        nome = 'sexta' + (opcoes.completo ? '-feira' : '');
        break;

      case WeekDay.Saturday:
      default:
        nome = 'sábado';
        break;
    }

    if (opcoes.toUpperCase) {
      nome = nome.toUpperCase();
    } else if (opcoes.capitalize) {
      nome = StringUtils.capilatize(nome);
    }

    return nome;
  }

  static getTimeFormatado(time: Time, separador: string = ':'): string {
    return `${StringUtils.pad(time.hours)}${separador}${StringUtils.pad(
      time.minutes
    )}`;
  }
}
