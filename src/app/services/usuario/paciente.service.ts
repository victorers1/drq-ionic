import { WeekDay } from '@angular/common';
import { Injectable } from '@angular/core';
import { DadosBancarios } from 'src/app/models/pessoas/pessoa-fisica/dados-bancarios';
import { DadosDeProfissao } from 'src/app/models/pessoas/pessoa-fisica/dados-profissao';
import { ExpedienteDePessoaFisica } from 'src/app/models/pessoas/pessoa-fisica/expediente-pessoa-fisica';
import { Paciente } from 'src/app/models/pessoas/pessoa-fisica/paciente';

import { Profissao } from 'src/app/models/geral/profissao';

@Injectable({
  providedIn: 'root',
})
export class PacienteService {
  public usuario = new Paciente(
    0,
    'victorers2',
    'Victor Emanuel Ribeiro Silva',
    '0898328428'
  );

  rates: any[];
  loading = true;
  error: any;

  constructor() {}

  async getDadosProfissao(): Promise<void> {
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

    const d1 = new DadosDeProfissao(0, new Profissao(0, 'Dentista'));
    d1.grauDeInstrucao = 'Ensino Superior';
    d1.expedientes = [e1, e2];
    d1.publico = true;

    const d2 = new DadosDeProfissao(0, new Profissao(1, 'Mecânico'));
    d2.grauDeInstrucao = 'Ensino Superior';
    d2.expedientes = [e2, e3];
    d2.publico = false;

    this.usuario.dadosProfissao = [d1, d2];
  }

  async getDadosBancarios(): Promise<void> {
    const b1 = new DadosBancarios(0);
    b1.nome = 'Banco do Brasil';
    b1.codigoDeOperacao = 'CC';
    b1.publico = true;

    const b2 = new DadosBancarios(0);
    b2.nome = 'Caixa Econômica Federal';
    b2.codigoDeOperacao = 'CC';
    b2.publico = false;

    this.usuario.dadosBancarios = [b1, b2];
  }
}
