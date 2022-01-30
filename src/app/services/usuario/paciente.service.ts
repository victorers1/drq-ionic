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

  constructor() {}
}
