import { WeekDay } from '@angular/common';
import { Injectable } from '@angular/core';
import { DadosBancarios } from 'src/app/models/pessoas/pessoa-fisica/dados-bancarios';
import { DadosDeProfissao } from 'src/app/models/pessoas/pessoa-fisica/dados-profissao';
import { ExpedienteDePessoaFisica } from 'src/app/models/pessoas/pessoa-fisica/expediente-pessoa-fisica';
import { IResponse, PROFISSIONAL_HOME_QUERY } from 'src/app/query-constants';
import { Apollo } from 'apollo-angular';
import { first } from 'rxjs/operators';
import { Profissional } from 'src/app/models/pessoas/pessoa-fisica/profissional';

@Injectable({
  providedIn: 'root',
})
export class ProfissionalService {
  usuario: Profissional;

  constructor(private apollo: Apollo) {}

  async getProfissionalById(idProfissional: number): Promise<Profissional> {
    let result = await this.apollo
      .watchQuery<IResponse>({
        query: PROFISSIONAL_HOME_QUERY,
        variables: {
          id: idProfissional,
        },
      })
      .valueChanges.pipe(first())
      .toPromise();

    console.log('result: ', result);

    this.usuario = new Profissional(
      idProfissional,
      result.data.PessoaFisica[0].username,
      result.data.PessoaFisica[0].nome,
      result.data.PessoaFisica[0].docFiscal
    );

    return this.usuario;
  }

  async getDadosProfissao(idProfissional: number): Promise<void> {
    const e1 = new ExpedienteDePessoaFisica(
      0,
      0,
      WeekDay.Monday,
      5,
      { hours: 8, minutes: 0 },
      { hours: 12, minutes: 0 }
    );
    const e2 = new ExpedienteDePessoaFisica(
      0,
      0,
      WeekDay.Monday,
      5,
      { hours: 14, minutes: 0 },
      { hours: 18, minutes: 0 }
    );
    const e3 = new ExpedienteDePessoaFisica(
      0,
      0,
      WeekDay.Monday,
      5,
      { hours: 20, minutes: 0 },
      { hours: 0, minutes: 0 }
    );

    const d1 = new DadosDeProfissao(0, 'Dentista');
    d1.grauDeInstrucao = 'Ensino Superior';
    d1.expedientes = [e1, e2];
    d1.isPublico = true;

    const d2 = new DadosDeProfissao(0, 'Mecânico');
    d2.grauDeInstrucao = 'Ensino Superior';
    d2.expedientes = [e2, e3];
    d2.isPublico = false;

    this.usuario.dadosProfissao = [d1, d2];
  }

  async getDadosBancarios(idProfissional: number): Promise<void> {
    const b1 = new DadosBancarios(0);
    b1.nome = 'Banco do Brasil';
    b1.codigoDeOperacao = 'CC';
    b1.isPublico = true;

    const b2 = new DadosBancarios(0);
    b2.nome = 'Caixa Econômica Federal';
    b2.codigoDeOperacao = 'CC';
    b2.isPublico = false;

    this.usuario.dadosBancarios = [b1, b2];
  }
}
