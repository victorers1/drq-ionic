import { Component, Input, OnInit } from '@angular/core';
import { DRQRoutes, STATUS_REQUISICAO, TIPO_REQUISICAO_DADOS } from 'src/app/constants';
import { RequisicaoParaDadosBancarios } from 'src/app/models/pessoas/pessoa-juridica/requisicao-dados-bancarios';
import { RequisicaoParaDadosDeDependente } from 'src/app/models/pessoas/pessoa-juridica/requisicao-dados-dependente';
import { RequisicaoParaDadosDePlanoDeSaude } from 'src/app/models/pessoas/pessoa-juridica/requisicao-dados-plano-saude';
import { RequisicaoParaDadosDeProfissao } from 'src/app/models/pessoas/pessoa-juridica/requisicao-dados-profissao';
import { DateUtils } from 'src/app/utils/date-utils';
@Component({
  selector: 'requisicao-dados',
  templateUrl: './requisicao-dados.component.html',
  styleUrls: ['./requisicao-dados.component.scss'],
})
export class RequisicaoDadosComponent implements OnInit {
  @Input('requisicaoDados') requisicaoDados: RequisicaoParaDadosDeProfissao | RequisicaoParaDadosBancarios | RequisicaoParaDadosDePlanoDeSaude | RequisicaoParaDadosDeDependente;
  @Input('index') indexRequisicaoDados: number;

  routes = new DRQRoutes();

  constructor() {
    STATUS_REQUISICAO.AUTORIZADO
  }

  ngOnInit() {
    console.log(`RequisicaoDadosComponent:`, { requisicao: this.requisicaoDados, index: this.indexRequisicaoDados });
  }

  onClick(event: CustomEvent) {
    console.log(`event:`, event);

  }

  getDadosPessoa() {
    if (this.requisicaoDados.pessoaFisica)
      return {
        nome: this.requisicaoDados.pessoaFisica.nome,
        email: this.requisicaoDados.pessoaFisica.email
      };
  }

  isAutorizado(): boolean {
    return this.requisicaoDados.status == STATUS_REQUISICAO.AUTORIZADO;
  }

  getDataFormatada(): string {
    return DateUtils.getDataFormatada(this.requisicaoDados.data);
  }

  getTipoRequisicao(): TIPO_REQUISICAO_DADOS {
    if (this.requisicaoDados instanceof RequisicaoParaDadosDeProfissao) return TIPO_REQUISICAO_DADOS.PROFISSAO;
    if (this.requisicaoDados instanceof RequisicaoParaDadosBancarios) return TIPO_REQUISICAO_DADOS.BANCARIO;
    if (this.requisicaoDados instanceof RequisicaoParaDadosDePlanoDeSaude) return TIPO_REQUISICAO_DADOS.PLANO_SAUDE;
    if (this.requisicaoDados instanceof RequisicaoParaDadosDeDependente) return TIPO_REQUISICAO_DADOS.DEPENDENTE;
  }


}
