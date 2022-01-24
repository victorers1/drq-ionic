import { Injectable } from '@angular/core';
import { IPessoaFisica } from 'src/app/apollo-constants';
import { ProfissionalFactory } from 'src/app/models/factories/pessoa-fisica/profissional-factory';

import { Profissional } from 'src/app/models/pessoas/pessoa-fisica/profissional';
import { YCodifyService, YC_ACTION } from '../yc/yc.service';

@Injectable({
  providedIn: 'root',
})
export class ProfissionalService {
  usuario: Profissional;
  profissionalFactory = new ProfissionalFactory();

  constructor(private ycService: YCodifyService) {}

  async setProfissionalById(idProfissional: number): Promise<void> {
    const result = await this.ycService.request<IPessoaFisica>({
      action: YC_ACTION.READ,
      object: {
        id: idProfissional,
        classUID: 'pessoafisica',
        role: 'ROLE_ADMIN',
        user: 'victorers',
      },
    });

    this.usuario = this.profissionalFactory.criar(
      {
        id: result.id,
        docFiscal: result.docfiscal,
        email: result.email,
        nome: result.nome,
      }
      // {
      //   dataDeNascimento: new Date(),
      //   sexo: result.sexo,
      //   rg: result.rg,
      //   foneUm: result.foneum,
      //   endPais: result.endpais,
      //   endEstado: result.endestado,
      //   endCidade: result.endcidade,
      //   endBairro: result.endbairro,
      //   endCEP: result.endcep,
      //   endLogradouro: result.endlogradouro,
      //   endComplemento: result.endcomplemento,
      //   endNumero: result.endnumero,
      // }
    );
  }
}
