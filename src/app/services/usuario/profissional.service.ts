import { WeekDay } from '@angular/common';
import { Injectable } from '@angular/core';
import { DadosBancarios } from 'src/app/models/pessoas/pessoa-fisica/dados-bancarios';
import { DadosDeProfissao } from 'src/app/models/pessoas/pessoa-fisica/dados-profissao';
import { ExpedienteDePessoaFisica } from 'src/app/models/pessoas/pessoa-fisica/expediente-pessoa-fisica';
import {
  IResponseProfissionalHome,
  PROFISSIONAL_HOME_QUERY,
} from 'src/app/query-constants';
import { Apollo } from 'apollo-angular';
import { first } from 'rxjs/operators';
import { Profissional } from 'src/app/models/pessoas/pessoa-fisica/profissional';
import { UsuarioUtils } from 'src/app/utils/usuario-utils';

@Injectable({
  providedIn: 'root',
})
export class ProfissionalService {
  usuario: Profissional;

  constructor(private apollo: Apollo) {}

  async getAndSetProfissionalById(
    idProfissional: number
  ): Promise<Profissional> {
    let result = await this.apollo
      .watchQuery<IResponseProfissionalHome>({
        query: PROFISSIONAL_HOME_QUERY,
        variables: {
          id: idProfissional,
        },
      })
      .valueChanges.pipe(first())
      .toPromise();

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
