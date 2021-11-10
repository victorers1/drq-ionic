import { Injectable } from '@angular/core';
import { TIPOS_USUARIOS } from 'src/app/constants';

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

  canCreate = (tipoUsuario: TIPOS_USUARIOS): boolean =>
    tipoUsuario == TIPOS_USUARIOS.PACIENTE;

  showPaciente = (tipoUsuario: TIPOS_USUARIOS): boolean =>
    tipoUsuario != TIPOS_USUARIOS.PACIENTE;

  showProfissional = (tipoUsuario: TIPOS_USUARIOS): boolean =>
    tipoUsuario != TIPOS_USUARIOS.PROFISSIONAL;
}
