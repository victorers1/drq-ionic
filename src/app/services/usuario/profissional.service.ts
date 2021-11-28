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

@Injectable({
  providedIn: 'root',
})
export class ProfissionalService {
  usuario: Profissional;

  constructor(private apollo: Apollo) {}

  async setAndGetProfissionalById(
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
      result.data.PessoaFisica[0].username,
      result.data.PessoaFisica[0].nome,
      result.data.PessoaFisica[0].docFiscal
    );

    return this.usuario;
  }
}
