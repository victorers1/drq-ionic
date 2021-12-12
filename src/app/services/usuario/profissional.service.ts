import { Injectable } from '@angular/core';
import {
  IResponseProfissionalHome,
  PROFISSIONAL_HOME_QUERY,
} from 'src/app/apollo-constants';
import { ProfissionalFactory } from 'src/app/models/factories/pessoa-fisica/profissional-factory';

import { Profissional } from 'src/app/models/pessoas/pessoa-fisica/profissional';
import { ApolloService } from '../apollo/apollo-service.service';

@Injectable({
  providedIn: 'root',
})
export class ProfissionalService {
  usuario: Profissional;
  profissionalFactory = new ProfissionalFactory();

  constructor(private apolloService: ApolloService) {}

  async setAndGetProfissionalById(
    idProfissional: number
  ): Promise<Profissional> {
    let result = await this.apolloService.query<IResponseProfissionalHome>({
      query: PROFISSIONAL_HOME_QUERY,
      variables: {
        id: idProfissional,
      },
    });

    this.usuario = this.profissionalFactory.criar(
      {
        id: idProfissional,
        email: result.data.PessoaFisica_by_pk.email,
        nome: result.data.PessoaFisica_by_pk.nome,
        docFiscal: result.data.PessoaFisica_by_pk.docFiscal,
      },
      {
        rg: result.data.PessoaFisica_by_pk.rg,
        email: result.data.PessoaFisica_by_pk.email,
        foneUm: result.data.PessoaFisica_by_pk.foneUm,
        endCEP: result.data.PessoaFisica_by_pk.endCEP,
        endLogradouro: result.data.PessoaFisica_by_pk.endLogradouro,
        endComplemento: result.data.PessoaFisica_by_pk.endComplemento,
        endNumero: result.data.PessoaFisica_by_pk.endNumero,
        endBairro: result.data.PessoaFisica_by_pk.endBairro,
        endCidade: result.data.PessoaFisica_by_pk.endCidade,
        endEstado: result.data.PessoaFisica_by_pk.endEstado,
        endPais: result.data.PessoaFisica_by_pk.endPais,
        dataDeNascimento: new Date(
          result.data.PessoaFisica_by_pk.dataDeNascimento * 1e3
        ),
        sexo: result.data.PessoaFisica_by_pk.sexo,
      }
    );

    return this.usuario;
  }
}
