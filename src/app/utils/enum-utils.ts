import { deprecate } from 'util';
import {
  SEXO,
  STATUS_ENTIDADE,
  TIPO_PESSOA_JURIDICA,
  TIPO_USUARIO,
} from '../constants';

/**
 * @deprecated The method will be removed in a future release and should not be used.
 */
export class EnumUtils {
  static getSexoById(id: number): SEXO {
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

  static getStatusEntidadeById(id: number): STATUS_ENTIDADE {
    switch (id) {
      case STATUS_ENTIDADE.INATIVO.valueOf():
        return STATUS_ENTIDADE.INATIVO;
      case STATUS_ENTIDADE.ATIVO.valueOf():
      default:
        return STATUS_ENTIDADE.ATIVO;
    }
  }

  static getTipoUsuarioById(id: number): TIPO_USUARIO {
    switch (id) {
      case TIPO_USUARIO.PACIENTE.valueOf():
        return TIPO_USUARIO.PACIENTE;
      case TIPO_USUARIO.PROFISSIONAL.valueOf():
        return TIPO_USUARIO.PROFISSIONAL;
      case TIPO_USUARIO.PESSOA_JURIDICA.valueOf():
        return TIPO_USUARIO.PESSOA_JURIDICA;
      case TIPO_USUARIO.INVALIDO.valueOf():
      default:
        return TIPO_USUARIO.INVALIDO;
    }
  }

  static getTipoPessoaJuridicaById(id: number): TIPO_PESSOA_JURIDICA {
    switch (id) {
      case TIPO_PESSOA_JURIDICA.FILIAL.valueOf():
        return TIPO_PESSOA_JURIDICA.FILIAL;
      case TIPO_PESSOA_JURIDICA.MATRIZ.valueOf():
      default:
        return TIPO_PESSOA_JURIDICA.MATRIZ;
    }
  }
}
