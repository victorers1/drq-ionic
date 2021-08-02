import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DRQRoutes, TIPO_REQUISICAO_DADOS } from 'src/app/constants';
import { PessoaFisica } from 'src/app/models/pessoas/pessoa-fisica/pessoa-fisica';
import { RequisicaoDados } from 'src/app/models/pessoas/pessoa-juridica/requisicao-dados';
import { RequisicaoParaDadosBancarios } from 'src/app/models/pessoas/pessoa-juridica/requisicao-dados-bancarios';
import { RequisicaoParaDadosDeDependente } from 'src/app/models/pessoas/pessoa-juridica/requisicao-dados-dependente';
import { RequisicaoParaDadosDePlanoDeSaude } from 'src/app/models/pessoas/pessoa-juridica/requisicao-dados-plano-saude';
import { RequisicaoParaDadosDeProfissao } from 'src/app/models/pessoas/pessoa-juridica/requisicao-dados-profissao';

@Component({
  selector: 'app-edit-requisicao-dado',
  templateUrl: './edit-requisicao-dado.page.html',
  styleUrls: ['./edit-requisicao-dado.page.scss'],
})
export class EditRequisicaoDadoPage implements OnInit {
  routes = new DRQRoutes();

  requisicaoDados: RequisicaoParaDadosDeProfissao | RequisicaoParaDadosBancarios | RequisicaoParaDadosDePlanoDeSaude | RequisicaoParaDadosDeDependente;

  constructor(private router: Router) {

    const params = router.getCurrentNavigation().extras.state;
    console.log('params:', params);

    if (params) {
      this.requisicaoDados = params as RequisicaoParaDadosDeProfissao | RequisicaoParaDadosBancarios | RequisicaoParaDadosDePlanoDeSaude | RequisicaoParaDadosDeDependente;
    }
  }

  ngOnInit() { }

  getDadosPessoaFisica() {
    const p = this.requisicaoDados.pessoaFisica;
    if (p) {
      return {
        nome: p.nome,
        email: p.email,
      }
    }
  }

  cancelar(): void {
    console.log('cancelar()');
  }

  getTipoRequisicao(): TIPO_REQUISICAO_DADOS {
    if (this.requisicaoDados instanceof RequisicaoParaDadosDeProfissao) return TIPO_REQUISICAO_DADOS.PROFISSAO;
    if (this.requisicaoDados instanceof RequisicaoParaDadosBancarios) return TIPO_REQUISICAO_DADOS.BANCARIO;
    if (this.requisicaoDados instanceof RequisicaoParaDadosDePlanoDeSaude) return TIPO_REQUISICAO_DADOS.PLANO_SAUDE;
    if (this.requisicaoDados instanceof RequisicaoParaDadosDeDependente) return TIPO_REQUISICAO_DADOS.DEPENDENTE;
  }

}
