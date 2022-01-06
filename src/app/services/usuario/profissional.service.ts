import { Injectable } from '@angular/core';
import { ProfissionalFactory } from 'src/app/models/factories/pessoa-fisica/profissional-factory';

import { Profissional } from 'src/app/models/pessoas/pessoa-fisica/profissional';

@Injectable({
  providedIn: 'root',
})
export class ProfissionalService {
  usuario: Profissional;
  profissionalFactory = new ProfissionalFactory();

  constructor() {}

  async setAndGetProfissionalById(
    idProfissional: number
  ): Promise<Profissional> {
    let result = '';

    return this.usuario;
  }
}
