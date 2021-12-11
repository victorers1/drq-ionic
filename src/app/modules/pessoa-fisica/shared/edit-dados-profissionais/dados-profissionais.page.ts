import { WeekDay } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import {
  DADO_DE_PROFISSAO_MUTATION,
  IInsertDadosDeProfissao,
} from 'src/app/apollo-constants';
import { DRQRoutes, STATUS_ENTIDADE } from 'src/app/constants';
import { Especialidade } from 'src/app/models/geral/especialidade';
import { Profissao } from 'src/app/models/geral/profissao';
import { Dado } from 'src/app/models/pessoas/dado';
import { DadosDeProfissao } from 'src/app/models/pessoas/pessoa-fisica/dados-profissao';
import { PessoaFisica } from 'src/app/models/pessoas/pessoa-fisica/pessoa-fisica';
import { ApolloService } from 'src/app/services/apollo/apollo-service.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { DateUtils } from 'src/app/utils/date-utils';
import { StringUtils } from 'src/app/utils/string-utils';

@Component({
  selector: 'app-dados-profissionais',
  templateUrl: './dados-profissionais.page.html',
  styleUrls: ['./dados-profissionais.page.scss'],
})
export class DadosProfissionaisPage implements OnInit {
  routes = new DRQRoutes();

  indexDadoProfissao: number;
  dadoProfissao: DadosDeProfissao;

  constructor(
    private usuarioService: UsuarioService,
    private apolloService: ApolloService,
    private router: Router,
    private navCtrl: NavController,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.indexDadoProfissao = this.router.getCurrentNavigation().extras
      .state as unknown as number;
    console.log('DadosProfissionaisPage params: ', this.indexDadoProfissao);

    if (this.indexDadoProfissao) {
      this.getDadoProfissao(this.indexDadoProfissao);
    } else {
      this.dadoProfissao = new DadosDeProfissao(
        this.usuarioService.get().usuario.id,
        null
      );
    }
  }

  async selectProfissao() {
    const modal = await this.modalService.selecionarProfissao();
    modal.present();
    const { data } = await modal.onWillDismiss<{ p: Profissao }>();
    console.log({ profissaoSelecionada: data });
    this.dadoProfissao.profissao = data.p;
  }

  async selectEspecialidade() {
    const modal = await this.modalService.selecionarEspecialidade({
      id: this.dadoProfissao.profissao.id,
    });
    modal.present();
    const { data } = await modal.onWillDismiss<{ e: Especialidade }>();
    console.log({ especialidadeSelecionada: data });
    this.dadoProfissao.especialidade = data.e;
  }

  get nomeProfissao(): string {
    return this.dadoProfissao?.profissao?.nome ?? 'Não selecionada';
  }

  get nomeEspecialidade(): string {
    return this.dadoProfissao?.especialidade?.nome ?? 'Não selecionada';
  }

  private getDadoProfissao(id: number) {
    // TODO usar apollo p/ pegar do banco
    this.dadoProfissao = (
      this.usuarioService.get().usuario as PessoaFisica
    ).dadosProfissao[this.indexDadoProfissao];
  }

  async saveDadosProfissionais() {
    const result = await this.apolloService.mutate<IInsertDadosDeProfissao>({
      mutation: DADO_DE_PROFISSAO_MUTATION,
      variables: {
        pessoaFisica: this.usuarioService.get().usuario.id,
        profissao: this.dadoProfissao.profissao.id,
        especialidade: this.dadoProfissao.especialidade.id,
        grauDeInstrucao: this.dadoProfissao.grauDeInstrucao,
        publico: this.dadoProfissao.publico,
        situacao: STATUS_ENTIDADE.ATIVO.valueOf(),
      },
    });

    console.log('saveDadosProfissionais()', result);
    this.navCtrl.pop();
  }

  diaDaSemanaNome(dia: WeekDay): string {
    const nome = DateUtils.diaDaSemanaNome(dia, { capitalize: true });
    return StringUtils.capilatize(nome);
  }
}
