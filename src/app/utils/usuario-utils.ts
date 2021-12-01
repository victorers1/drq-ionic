import { SEXO } from '../constants';

export class UsuarioUtils {
  static getSexoByCod(id: number): SEXO {
    switch (id) {
      case SEXO.MASCULINO.valueOf():
        return SEXO.MASCULINO;
      case SEXO.FEMININO.valueOf():
        return SEXO.FEMININO;
      case SEXO.OUTRO.valueOf():
        return SEXO.OUTRO;
      case SEXO.PREFERE_NAO_DIZER.valueOf():
      default:
        return SEXO.PREFERE_NAO_DIZER;
    }
  }
}
