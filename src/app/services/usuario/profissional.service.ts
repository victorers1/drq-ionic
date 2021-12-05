import { Injectable } from '@angular/core';
import {
  IResponseProfissionalHome,
  PROFISSIONAL_HOME_QUERY,
} from 'src/app/query-constants';

import { Profissional } from 'src/app/models/pessoas/pessoa-fisica/profissional';
import { UsuarioUtils } from 'src/app/utils/usuario-utils';
import { ApolloService } from '../apollo-service/apollo-service.service';

@Injectable({
  providedIn: 'root',
})
export class ProfissionalService {
  usuario: Profissional;

  constructor(private apolloService: ApolloService) {}

  async getAndSetProfissionalById(
    idProfissional: number
  ): Promise<Profissional> {
    let result = await this.apolloService.query<IResponseProfissionalHome>({
      query: PROFISSIONAL_HOME_QUERY,
      variables: {
        id: idProfissional,
      },
    });

    /**
     * NOTA: pode-se usar o FACTORY METHOD para construir Profissionais e Pacientes sem duplicação de código
     * Fábrica Abstrata = Fábrica de Pessoas
     * Fábricas concretas = [Fábrica de profissionais, Fábrica de pacientes]
     * Operação em comum: carregar dados nos atributos de pessoa física
     *
     * Bibliografia:
     * * https://refactoring.guru/pt-br/design-patterns/factory-method/typescript/example
     */
    this.usuario = new Profissional(
      idProfissional,
      result.data.PessoaFisica_by_pk.username,
      result.data.PessoaFisica_by_pk.nome,
      result.data.PessoaFisica_by_pk.docFiscal
    );

    this.usuario.rg = result.data.PessoaFisica_by_pk.rg;
    this.usuario.email = result.data.PessoaFisica_by_pk.email;
    this.usuario.foneUm = result.data.PessoaFisica_by_pk.foneUm;
    this.usuario.endCEP = result.data.PessoaFisica_by_pk.endCEP;
    this.usuario.endLogradouro = result.data.PessoaFisica_by_pk.endLogradouro;
    this.usuario.endNumero = result.data.PessoaFisica_by_pk.endNumero;
    this.usuario.endBairro = result.data.PessoaFisica_by_pk.endBairro;
    this.usuario.endCidade = result.data.PessoaFisica_by_pk.endCidade;
    this.usuario.endEstado = result.data.PessoaFisica_by_pk.endEstado;
    this.usuario.endPais = result.data.PessoaFisica_by_pk.endPais;
    // this.usuario.dataDeNascimento =
    // result.data.PessoaFisica_by_pk.dataDeNascimento;
    this.usuario.sexo = UsuarioUtils.getSexoByCod(
      result.data.PessoaFisica_by_pk.sexo
    );

    return this.usuario;
  }
}
