import { WeekDay } from "@angular/common";

export class DateUtils {
    static diaDaSemanaNome(dia: WeekDay): string {
        switch (dia) {
            case WeekDay.Sunday:
                return 'domingo';

            case WeekDay.Monday:
                return 'segunda';

            case WeekDay.Tuesday:
                return 'terça';

            case WeekDay.Wednesday:
                return 'quarta';

            case WeekDay.Thursday:
                return 'quinta';

            case WeekDay.Friday:
                return 'sexta';

            case WeekDay.Saturday:
            default:
                return 'sábado';
        }
    }
}