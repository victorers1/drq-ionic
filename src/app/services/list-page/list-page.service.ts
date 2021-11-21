import { Injectable } from '@angular/core';
import { TIPO_USUARIO } from 'src/app/constants';

/**
 * Service responsável por decidir se uma página de listagem
 * de itens pode ser para criar um novo.
 * Também decide quais informações pode ser mostradas nos itens.
 */
@Injectable({
  providedIn: 'root',
})
export class ListPageService {
  constructor() {}

  canCreate = (tipoUsuario: TIPO_USUARIO): boolean =>
    tipoUsuario == TIPO_USUARIO.PACIENTE;

  showPaciente = (tipoUsuario: TIPO_USUARIO): boolean =>
    tipoUsuario != TIPO_USUARIO.PACIENTE;

  showProfissional = (tipoUsuario: TIPO_USUARIO): boolean =>
    tipoUsuario != TIPO_USUARIO.PROFISSIONAL;
}
