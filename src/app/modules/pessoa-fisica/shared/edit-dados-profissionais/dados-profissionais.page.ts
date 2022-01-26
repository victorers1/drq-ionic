import { WeekDay } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

import { DRQRoutes, STATUS_ENTIDADE } from 'src/app/constants';
import { Especialidade } from 'src/app/models/geral/especialidade';
import { Profissao } from 'src/app/models/geral/profissao';
import { DadosDeProfissao } from 'src/app/models/pessoas/pessoa-fisica/dados-profissao';
import { ExpedienteDePessoaFisica } from 'src/app/models/pessoas/pessoa-fisica/expediente-pessoa-fisica';
import { ModalService } from 'src/app/services/modal/modal.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { YCodifyService, YC_ACTION } from 'src/app/services/yc/yc.service';
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
    private router: Router,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private modalService: ModalService,
    private yc: YCodifyService
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

  private async getDadosProfissao() {}

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

  private async createDadosDeProfissao() {
    const result = this.yc.request({
      action: YC_ACTION.CREATE,
      object: {
        classUID: 'dadosdeprofissao',
        especialidade: {
          classUID: 'especialidade',
          id: this.dadoProfissao.especialidade.id,
          role: 'ROLE_ADMIN',
        },
        profissao: {
          classUID: 'profissao',
          id: this.dadoProfissao.profissao.id,
          role: 'ROLE_ADMIN',
        },
        pessoafisica: {
          classUID: 'pessoafisica',
          id: this.usuarioService.get().usuario.id,
          role: 'ROLE_ADMIN',
        },
        conselhodeclasseid: null,
        conselhodeclasse: null,
        graudeinstrucao: 'SUPERIOR',
        publico: false,
        status: true,
        role: 'ROLE_ADMIN',
        user: 'victorers',
      },
    });
  }

  private async updateDadosDeProfissao() {}

  async updateExpedientesDePessoaFisica(
    expedientesExistentes: ExpedienteDePessoaFisica[]
  ) {
    const result = '';
    for (const e of expedientesExistentes) {
      console.log('updateExpediente:', result);
    }
  }

  async createExpedientesDePessoaFisica(
    expedientesNovos: ExpedienteDePessoaFisica[]
  ) {
    for (const e of expedientesNovos) {
      const result = '';
      console.log('createExpediente:', result);
    }
  }

  async deleteExpediente(id: number) {}

  async deleteDadosDeProfissao() {
    const result = '';
    console.log('deleteDadosDeProfissao():', result);
    this.navCtrl.pop();
  }

  async saveDadosProfissionais() {
    this.navCtrl.pop();
  }

  diaDaSemanaNome(dia: WeekDay): string {
    const nome = DateUtils.diaDaSemanaNome(dia, { capitalize: true });
    return StringUtils.capilatize(nome);
  }
}
