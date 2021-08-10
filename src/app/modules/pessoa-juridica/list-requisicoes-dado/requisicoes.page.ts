import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';
import { PessoaJuridica } from 'src/app/models/pessoas/pessoa-juridica/pessoa-juridica';
import { RequisicaoParaDadosBancarios } from 'src/app/models/pessoas/pessoa-juridica/requisicao-dados-bancarios';
import { RequisicaoParaDadosDePlanoDeSaude } from 'src/app/models/pessoas/pessoa-juridica/requisicao-dados-plano-saude';
import { RequisicaoParaDadosDeProfissao } from 'src/app/models/pessoas/pessoa-juridica/requisicao-dados-profissao';
import { PessoaJuridicaService } from 'src/app/services/pessoa-juridica/pessoa-juridica.service';
import { StringUtils } from 'src/app/utils/string-utils';

@Component({
  selector: 'app-requisicoes',
  templateUrl: './requisicoes.page.html',
  styleUrls: ['./requisicoes.page.scss'],
})
export class RequisicoesPage implements OnInit {
  private usuario: PessoaJuridica;

  reqDadosProfissao: RequisicaoParaDadosDeProfissao[] = [];
  reqDadosBancarios: RequisicaoParaDadosBancarios[] = [];
  reqDadosPlanoSaude: RequisicaoParaDadosDePlanoDeSaude[] = [];

  constructor(private usuarioCtrl: PessoaJuridicaService) {
    this.usuario = this.usuarioCtrl.usuario;

    this.reqDadosProfissao = this.usuario.requisicoesDadosProfissao;
    this.reqDadosBancarios = this.usuario.requisicoesDadosBancarios;
    this.reqDadosPlanoSaude = this.usuario.requisicoesDadosPlanoSaude;
  }

  ngOnInit() {
    console.log('usuario:', this.usuario);
  }

  onClick() { }

  onSearchBarChange(event: CustomEvent) {
    console.log(`onSearchBarChange:`, event);
    let nome: string = event.detail['value'];

    if (nome.length > 0) {
      this.reqDadosProfissao = this.usuario.requisicoesDadosProfissao.filter((dado) => { return StringUtils.search(dado.pessoaFisica.nome, nome); });
      this.reqDadosBancarios = this.usuario.requisicoesDadosBancarios.filter((dado) => { return StringUtils.search(dado.pessoaFisica.nome, nome); });
      this.reqDadosPlanoSaude = this.usuario.requisicoesDadosPlanoSaude.filter((dado) => { return StringUtils.search(dado.pessoaFisica.nome, nome); });

    } else {
      this.reqDadosProfissao = this.usuario.requisicoesDadosProfissao;
      this.reqDadosBancarios = this.usuario.requisicoesDadosBancarios;
      this.reqDadosPlanoSaude = this.usuario.requisicoesDadosPlanoSaude;
    }
  }


}
