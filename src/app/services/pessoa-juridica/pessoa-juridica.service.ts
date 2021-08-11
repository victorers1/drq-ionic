import { Time, WeekDay } from '@angular/common';
import { Injectable } from '@angular/core';
import { STATUS_REQUISICAO_DADO, TIPO_PESSOA_JURIDICA } from 'src/app/constants';
import { PessoaFisica } from 'src/app/models/pessoas/pessoa-fisica/pessoa-fisica';
import { ExpedienteDeUnidade } from 'src/app/models/pessoas/pessoa-juridica/expediente-unidade';
import { PessoaJuridica } from 'src/app/models/pessoas/pessoa-juridica/pessoa-juridica';
import { RequisicaoParaDadosBancarios } from 'src/app/models/pessoas/pessoa-juridica/requisicao-dados-bancarios';
import { RequisicaoParaDadosDePlanoDeSaude } from 'src/app/models/pessoas/pessoa-juridica/requisicao-dados-plano-saude';
import { RequisicaoParaDadosDeProfissao } from 'src/app/models/pessoas/pessoa-juridica/requisicao-dados-profissao';
import { Unidade } from 'src/app/models/pessoas/unidade';

@Injectable({
  providedIn: 'root'
})
export class PessoaJuridicaService {
  usuario = new PessoaJuridica(
    'victorers1',
    'Centro de Saúde Soledade II',
    '80744850000133',
    'Centro de Sáude do Soledade II',
    'Melhor Centro de Saúde do Soledade II',
    '',
    TIPO_PESSOA_JURIDICA.MATRIZ
  );



  constructor() {
    this.getRequisicoes();
    this.getUnidades();
  }

  async getRequisicoes(): Promise<void> {
    const p1 = new PessoaFisica(
      'victorers2',
      'Victor Emanuel Ribeiro Silva',
      '32132132',
      'victorers2@gmail.com',
      'Rua Hiroshi Ienaga',
      '1170',
      'Pajuçara',
      'Natal',
      'RN',
      'BRASIL',
      new Date(1996, 6, 13),
      'M',
      0
    );
    const p2 = new PessoaFisica(
      'fulanoers',
      'Fulano da Silva',
      '12312312',
      'maisa_761@gmail.com',
      'Rua Hiroshi Ienaga',
      '1170',
      'Pajuçara',
      'Natal',
      'RN',
      'BRASIL',
      new Date(1996, 6, 13),
      'M',
      0
    );

    const rdp1 = new RequisicaoParaDadosDeProfissao(0, 0);
    rdp1.pessoaFisica = p1;
    const rdp2 = new RequisicaoParaDadosDeProfissao(1, 0, STATUS_REQUISICAO_DADO.AUTORIZADO);
    rdp2.pessoaFisica = p2;

    this.usuario.requisicoesDadosProfissao = [rdp1, rdp2];

    const rdb1 = new RequisicaoParaDadosBancarios(0, 0);
    rdb1.pessoaFisica = p1;
    const rdb2 = new RequisicaoParaDadosBancarios(0, 0, STATUS_REQUISICAO_DADO.AUTORIZADO);
    rdb2.pessoaFisica = p2;
    this.usuario.requisicoesDadosBancarios = [rdb1, rdb2];

    const rdps1 = new RequisicaoParaDadosDePlanoDeSaude(0, 0);
    rdps1.pessoaFisica = p1;
    const rdps2 = new RequisicaoParaDadosDePlanoDeSaude(0, 0, STATUS_REQUISICAO_DADO.AUTORIZADO);
    rdps2.pessoaFisica = p2;
    this.usuario.requisicoesDadosPlanoSaude = [rdps1, rdps2];
  }

  getUnidades() {
    const eu1 = new ExpedienteDeUnidade(
      0,
      WeekDay.Monday,
      5,
      { hours: 8, minutes: 0 },
      { hours: 12, minutes: 0 },
    );

    const eu2 = new ExpedienteDeUnidade(
      0,
      WeekDay.Monday,
      5,
      { hours: 14, minutes: 0 },
      { hours: 18, minutes: 0 },
    );


    const u1 = new Unidade(
      this.usuario,
      'Centro Saúde Soledade II',
      'Vacinas',
      '(84) 999444240',
      'Rua Rio do Sul',
      '1170',
      'Conj. Soledade II',
      'Potengi',
      'Natal',
      'RN'
    );
    u1.expedientes = [eu1, eu2];

    const u2 = new Unidade(
      this.usuario,
      'Centro Saúde Soledade I',
      'Vacinas',
      '(84) 999444240',
      'Rua Rio do Campos',
      '1170',
      'Conj. Soledade I',
      'Potengi',
      'Natal',
      'RN'
    );
    u2.expedientes = [eu1, eu2];

    const u3 = new Unidade(
      this.usuario,
      'Centro Santa Catarina',
      'Vacinas',
      '(84) 999444240',
      'Rua Rio Fortuna',
      '1170',
      'Conj. Santa Catarina',
      'Potengi',
      'Natal',
      'RN'
    );
    u3.expedientes = [eu1, eu2];

    this.usuario.unidades = [u1, u2, u3];
  }
}
