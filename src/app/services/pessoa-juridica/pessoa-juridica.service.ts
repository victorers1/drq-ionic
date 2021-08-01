import { Injectable } from '@angular/core';
import { STATUS_REQUISICAO, TIPO_PESSOA_JURIDICA } from 'src/app/constants';
import { PessoaFisica } from 'src/app/models/pessoas/pessoa-fisica/pessoa-fisica';
import { PessoaJuridica } from 'src/app/models/pessoas/pessoa-juridica/pessoa-juridica';
import { RequisicaoParaDadosBancarios } from 'src/app/models/pessoas/pessoa-juridica/requisicao-dados-bancarios';
import { RequisicaoParaDadosDePlanoDeSaude } from 'src/app/models/pessoas/pessoa-juridica/requisicao-dados-plano-saude';
import { RequisicaoParaDadosDeProfissao } from 'src/app/models/pessoas/pessoa-juridica/requisicao-dados-profissao';

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
    const rdp2 = new RequisicaoParaDadosDeProfissao(1, 0, STATUS_REQUISICAO.AUTORIZADO);
    rdp2.pessoaFisica = p2;

    this.usuario.requisicoesDadosProfissao = [rdp1, rdp2];

    const rdb1 = new RequisicaoParaDadosBancarios(0, 0);
    rdb1.pessoaFisica = p1;
    const rdb2 = new RequisicaoParaDadosBancarios(0, 0, STATUS_REQUISICAO.AUTORIZADO);
    rdb2.pessoaFisica = p2;
    this.usuario.requisicoesDadosBancarios = [rdb1, rdb2];

    const rdps1 = new RequisicaoParaDadosDePlanoDeSaude(0, 0);
    rdps1.pessoaFisica = p1;
    const rdps2 = new RequisicaoParaDadosDePlanoDeSaude(0, 0, STATUS_REQUISICAO.AUTORIZADO);
    rdps2.pessoaFisica = p2;
    this.usuario.requisicoesDadosPlanoSaude = [rdps1, rdps2];
  }
}
