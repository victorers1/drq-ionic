import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DRQRoutes, STATUS_REQUISICAO_DADO } from 'src/app/constants';
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
  @Input() requisicaoDados:
    | RequisicaoParaDadosDeProfissao
    | RequisicaoParaDadosBancarios
    | RequisicaoParaDadosDePlanoDeSaude
    | RequisicaoParaDadosDeDependente;

  routes = new DRQRoutes();

  constructor(private navCtrl: NavController, private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(`RequisicaoDadosComponent:`, {
      requisicao: this.requisicaoDados,
    });
  }

  onClick() {
    this.navCtrl.navigateForward([this.routes.EDIT_REQUISICAO_DADOS], {
      state: this.requisicaoDados,
      relativeTo: this.route,
    });
  }

  getDadosPessoa() {
    const p = this.requisicaoDados.pessoaFisica;
    if (p) {
      return {
        nome: p.nome,
        email: p.email,
      };
    }
  }

  isAutorizado = (): boolean =>
    this.requisicaoDados.status === STATUS_REQUISICAO_DADO.AUTORIZADO;

  getDataFormatada = (): string => this.requisicaoDados.getDataFormatada();
}
