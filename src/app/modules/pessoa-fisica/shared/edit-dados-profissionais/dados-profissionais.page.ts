import { WeekDay } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { resultKeyNameFromField } from '@apollo/client/utilities';
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
    if (data?.p) this.dadoProfissao.newProfissao = data.p;
  }
  async selectEspecialidade() {
    const modal = await this.modalService.selecionarEspecialidade({
      id: this.dadoProfissao.profissao.id,
    });
    modal.present();
    const { data } = await modal.onWillDismiss<{ e: Especialidade }>();
    console.log({ especialidadeSelecionada: data });
    if (data?.e) this.dadoProfissao.especialidade = data.e;
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
    // TODO(bug): não há como editar novos expedientes ainda não salvos no banco,
    // pois todos os expedientes novos têm id iguais (null).
    const modal = await this.modalService.editarExpediente({
      expediente:
        id == null
          ? null
          : this.dadoProfissao.expedientes.find((e) => e.id == id),
      idDadoProfissao: this.idDadoProfissao,
    });
    modal.present();

    const { data } = await modal.onWillDismiss<{
      e: ExpedienteDePessoaFisica;
    }>();

    if (id == null && data && data.e.id == null) {
      console.log({ expedienteCriado: data });
      data.e.dadosDeProfissaoID = this.idDadoProfissao;
      this.dadoProfissao.expedientes.push(data.e);
    }
  }

  async saveDadosProfissionais() {
    let result;
    debugger;
    if (this.idDadoProfissao) {
      result = await this.updateDadosDeProfissao();
    } else {
      result = await this.createDadosDeProfissao();
    }
    console.log('saveDadosProfissionais(): ', result);

    const expedienteExistentes = this.dadoProfissao.expedientes.filter(
      (e) => e.id != null
    );
    const expedientesNovos = this.dadoProfissao.expedientes.filter(
      (e) => e.id == null
    );
    await this.updateExpedientesDePessoaFisica(expedienteExistentes);
    await this.createExpedientesDePessoaFisica(expedientesNovos);

    this.navCtrl.pop();
  }

  private async createDadosDeProfissao() {
    return await this.apolloService.mutate<IInsertDadosDeProfissao>({
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
    return await this.apolloService.mutate<IUpdateDadosDeProfissao>({
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
    expedientesExistentes: ExpedienteDePessoaFisica[]
  ) {
    for (const e of expedientesExistentes) {
      const result = await this.apolloService.mutate({
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
      console.log('updateExpediente:', result);
    }
  }

  async createExpedientesDePessoaFisica(
    expedientesNovos: ExpedienteDePessoaFisica[]
  ) {
    // TODO criar todos com uma mesma mutation
    for (const e of expedientesNovos) {
      const result = await this.apolloService.mutate({
        mutation: INSERT_EXPEDIENTE_DE_PESSOA_FISICA,
        variables: {
          dadosDeProfissao: this.dadoProfissao.id,
          diaDaSemana: e.diaDaSemana,
          inicio: DateUtils.getTimeFormatado(e.inicio),
          termino: DateUtils.getTimeFormatado(e.termino),
          recorrencia: e.recorrencia,
          // pessoaJuridica: e.pessoaJuridicaID,
        },
      });
      console.log('createExpediente:', result);
    }
  }

  async deleteExpediente(id: number) {}

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
