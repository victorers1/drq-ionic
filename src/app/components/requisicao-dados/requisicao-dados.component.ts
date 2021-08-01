import { Component, Input, OnInit } from '@angular/core';
import { DRQRoutes, STATUS_REQUISICAO, TIPO_REQUISICAO_DADOS } from 'src/app/constants';
import { RequisicaoDados } from 'src/app/models/pessoas/pessoa-juridica/requisicao-dados';
import { DateUtils } from 'src/app/utils/date-utils';
@Component({
  selector: 'requisicao-dados',
  templateUrl: './requisicao-dados.component.html',
  styleUrls: ['./requisicao-dados.component.scss'],
})
export class RequisicaoDadosComponent implements OnInit {
  // @Input('tipoRequisicao') tipoRequisicao: TIPO_REQUISICAO_DADOS;
  @Input('requisicaoDados') requisicaoDados: RequisicaoDados;
  @Input('index') indexRequisicaoDados: number;

  routes = new DRQRoutes();

  constructor() {
    STATUS_REQUISICAO.AUTORIZADO
  }

  ngOnInit() {
    console.log(`RequisicaoDadosComponent:`, { requisicao: this.requisicaoDados, index: this.indexRequisicaoDados });
  }

  isAutorizado(): boolean {
    return this.requisicaoDados.status == STATUS_REQUISICAO.AUTORIZADO;
  }

  getDataFormatada(): string {
    return DateUtils.getDataFormatada(this.requisicaoDados.data);
  }
}
