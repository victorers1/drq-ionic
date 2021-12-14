import { WeekDay } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import {
  INSERT_DADO_DE_PROFISSAO,
  EDIT_DADOS_DE_PROFISSAO_QUERY,
  IDadosDeProfissaoByPK,
  IInsertDadosDeProfissao,
  IDeleteDadosDeProfissao,
  DELETE_DADOS_DE_PROFISSAO,
  IUpdateDadosDeProfissao,
  UPDATE_DADOS_DE_PROFISSAO,
  UPDATE_EXPEDIENTE_DE_PESSOA_FISICA,
  INSERT_EXPEDIENTE_DE_PESSOA_FISICA,
} from 'src/app/apollo-constants';
import { DRQRoutes, STATUS_ENTIDADE } from 'src/app/constants';
import { Especialidade } from 'src/app/models/geral/especialidade';
import { Profissao } from 'src/app/models/geral/profissao';
import { DadosDeProfissao } from 'src/app/models/pessoas/pessoa-fisica/dados-profissao';
import { ExpedienteDePessoaFisica } from 'src/app/models/pessoas/pessoa-fisica/expediente-pessoa-fisica';
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

  idDadoProfissao: number;
  dadoProfissao: DadosDeProfissao;

  constructor(
    private usuarioService: UsuarioService,
    private apolloService: ApolloService,
    private router: Router,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.idDadoProfissao = this.router.getCurrentNavigation().extras?.state
      ?.id as unknown as number;
    console.log(
      'DadosProfissionaisPage this.idDadoProfissao: ',
      this.idDadoProfissao
    );

    if (this.idDadoProfissao != null) {
      this.getDadosProfissao();
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
    this.dadoProfissao.newProfissao ??= data.p;
  }
  async selectEspecialidade() {
    const modal = await this.modalService.selecionarEspecialidade({
      id: this.dadoProfissao.profissao.id,
    });
    modal.present();
    const { data } = await modal.onWillDismiss<{ e: Especialidade }>();
    console.log({ especialidadeSelecionada: data });
    this.dadoProfissao.especialidade ??= data.e;
  }

  get nomeProfissao(): string {
    return this.dadoProfissao?.nomeProfissao ?? 'Não selecionada';
  }
  get nomeEspecialidade(): string {
    return this.dadoProfissao?.nomeEspecialidade ?? 'Não selecionada';
  }

  private async getDadosProfissao() {
    const result = await this.apolloService.query<IDadosDeProfissaoByPK>({
      query: EDIT_DADOS_DE_PROFISSAO_QUERY,
      variables: { id: this.idDadoProfissao },
    });
    console.log(`getDadosProfissao(${this.idDadoProfissao}): `, result);
    this.dadoProfissao = this.usuarioService.mapDadosDeProfissaoFromResult(
      [result.data.DadosDeProfissao_by_pk],
      this.usuarioService.get().usuario.id
    )[0];
  }

  async openExpediente(id?: number) {
    const modal = await this.modalService.editarExpediente({
      expediente: this.dadoProfissao.expedientes.find((e) => e.id == id),
      idDadoProfissao: this.idDadoProfissao,
    });
    modal.present();
  }

  async saveDadosProfissionais() {
    //TODO testar
    if (this.idDadoProfissao) {
      await this.updateDadosDeProfissao();
    } else {
      await this.createDadosDeProfissao();
    }

    const expedienteExistentes = this.dadoProfissao.expedientes.filter(
      (e) => e.id != null
    );
    const expedientesNovos = this.dadoProfissao.expedientes.filter(
      (e) => e.id == null
    );

    await this.updateExpedientesDePessoaFisica(expedienteExistentes);
    await this.createExpedientesDePessoaFisica(expedientesNovos);

    console.log('saveDadosProfissionais(): done');
    this.navCtrl.pop();
  }

  private createDadosDeProfissao() {
    return this.apolloService.mutate<IInsertDadosDeProfissao>({
      mutation: INSERT_DADO_DE_PROFISSAO,
      variables: {
        pessoaFisica: this.usuarioService.get().usuario.id,
        profissao: this.dadoProfissao.profissao.id,
        especialidade: this.dadoProfissao.especialidade.id,
        grauDeInstrucao: this.dadoProfissao.grauDeInstrucao,
        publico: this.dadoProfissao.publico,
        situacao: this.dadoProfissao.status.valueOf(),
      },
    });
  }

  private async updateDadosDeProfissao() {
    await this.apolloService.mutate<IUpdateDadosDeProfissao>({
      mutation: UPDATE_DADOS_DE_PROFISSAO,
      variables: {
        id: this.idDadoProfissao,
        publico: this.dadoProfissao.publico,
        situacao: this.dadoProfissao.status.valueOf(),
        profissao: this.dadoProfissao.profissao.id,
        especialidade: this.dadoProfissao.especialidade.id,
        grauDeInstrucao: this.dadoProfissao.grauDeInstrucao,
      },
    });
  }

  async updateExpedientesDePessoaFisica(
    expedientes: ExpedienteDePessoaFisica[]
  ) {
    for (const e of expedientes) {
      await this.apolloService.mutate({
        mutation: UPDATE_EXPEDIENTE_DE_PESSOA_FISICA,
        variables: {
          id: e.id,
          dadosDeProfissao: this.dadoProfissao.id,
          diaDaSemana: e.diaDaSemana,
          inicio: DateUtils.getTimeFormatado(e.inicio),
          termino: DateUtils.getTimeFormatado(e.termino),
          recorrencia: e.recorrencia,
          pessoaJuridica: e.pessoaJuridicaID,
        },
      });
    }
  }

  async createExpedientesDePessoaFisica(
    expedientes: ExpedienteDePessoaFisica[]
  ) {
    for (const e of expedientes) {
      await this.apolloService.mutate({
        mutation: INSERT_EXPEDIENTE_DE_PESSOA_FISICA,
        variables: {
          dadosDeProfissao: this.dadoProfissao.id,
          diaDaSemana: e.diaDaSemana,
          inicio: DateUtils.getTimeFormatado(e.inicio),
          termino: DateUtils.getTimeFormatado(e.termino),
          recorrencia: e.recorrencia,
          pessoaJuridica: e.pessoaJuridicaID,
        },
      });
    }
  }

  async deleteDadosDeProfissao() {
    const result = await this.apolloService.mutate<IDeleteDadosDeProfissao>({
      mutation: DELETE_DADOS_DE_PROFISSAO,
      variables: { id: this.idDadoProfissao },
    });
    console.log('deleteDadosDeProfissao():', result);
    this.navCtrl.pop();
  }

  diaDaSemanaNome(dia: WeekDay): string {
    const nome = DateUtils.diaDaSemanaNome(dia, { capitalize: true });
    return StringUtils.capilatize(nome);
  }
}
