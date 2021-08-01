import { Injectable } from '@angular/core';
import { STATUS_REQUISICAO, TIPO_PESSOA_JURIDICA } from 'src/app/constants';
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
    const rdp1 = new RequisicaoParaDadosDeProfissao(0, 0);
    const rdp2 = new RequisicaoParaDadosDeProfissao(1, 0, STATUS_REQUISICAO.AUTORIZADO);
    this.usuario.requisicoesDadosProfissao = [rdp1, rdp2];

    const rdb1 = new RequisicaoParaDadosBancarios(0, 0);
    const rdb2 = new RequisicaoParaDadosBancarios(0, 0, STATUS_REQUISICAO.AUTORIZADO);
    this.usuario.requisicoesDadosBancarios = [rdb1, rdb2];

    const rdps1 = new RequisicaoParaDadosDePlanoDeSaude(0, 0);
    const rdps2 = new RequisicaoParaDadosDePlanoDeSaude(0, 0, STATUS_REQUISICAO.AUTORIZADO);
    this.usuario.requisicoesDadosPlanoSaude = [rdps1, rdps2];
  }
}
