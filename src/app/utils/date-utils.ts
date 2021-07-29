import { WeekDay } from "@angular/common";
import { StringUtils } from "./string-utils";

export interface diaDaSemanaOptions {
    toUpperCase?: boolean,
    capitalize?: boolean,
    completo?: boolean
}
export class DateUtils {

    static diaDaSemanaNome(dia: WeekDay, opcoes?: diaDaSemanaOptions): string {
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

        if (opcoes.capitalize) {
            nome = StringUtils.capilatize(nome);
        }
        if (opcoes.toUpperCase) {
            nome = nome.toUpperCase();
        }

        return nome;
    }
}