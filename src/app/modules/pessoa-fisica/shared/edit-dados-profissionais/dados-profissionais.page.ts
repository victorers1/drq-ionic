import { WeekDay } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { IDadosDeProfissao, YCArray } from 'src/app/interfaces';

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

    if (this.idDadoProfissao) {
      this.getDadosProfissao();
    } else {
      this.dadoProfissao = new DadosDeProfissao(
        this.usuarioService.get().usuario.id,
        null,
        null,
        false,
        null
      );
    }
  }

  get nomeProfissao(): string {
    return this.dadoProfissao?.nomeProfissao ?? 'Não selecionada';
  }
  get nomeEspecialidade(): string {
    return this.dadoProfissao?.nomeEspecialidade ?? 'Não selecionada';
  }

  async selectProfissao() {
    const modal = await this.modalService.selecionarProfissao();
    modal.present();
    const { data } = await modal.onWillDismiss<{ p: Profissao }>();
    console.log({ profissaoSelecionada: data });
    if (data?.p) this.dadoProfissao.profissao = data.p;
  }
  async selectEspecialidade() {
    const modal = await this.modalService.selecionarEspecialidade({
      profissao: this.dadoProfissao.profissao,
    });
    modal.present();
    const { data } = await modal.onWillDismiss<{ e: Especialidade }>();
    console.log({ especialidadeSelecionada: data });
    if (data?.e) this.dadoProfissao.especialidade = data.e;
  }

  private async getDadosProfissao() {
    let result: any = await this.yc.request<YCArray<IDadosDeProfissao>>({
      action: YC_ACTION.READ,
      object: {
        classUID: 'dadosdeprofissao',
        role: 'ROLE_ADMIN',
        id: this.idDadoProfissao,
      },
      criterion: {
        connective: 'AND',
        toCount: false,
        orderBy: 'id',
        order: 'asc',
        maxRegisters: 20,
        firstRegister: 0,
      },
      associations: {
        mode: true,
        level: 2,
      },
    });

    result = result.data[0];

    this.dadoProfissao = new DadosDeProfissao(
      result.pessoafisica.id,
      new Especialidade(
        result.especialidade.id,
        result.especialidade.nome,
        new Profissao(
          result.especialidade.profissao.id,
          result.especialidade.profissao.nome
        )
      ),
      result.id,
      result.publico,
      result.graudeinstrucao
    );
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

  private async createDadosDeProfissao() {
    await this.yc.request({
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
        graudeinstrucao: this.dadoProfissao.grauDeInstrucao,
        publico: this.dadoProfissao.publico,
        status: this.dadoProfissao.status,
        role: 'ROLE_ADMIN',
      },
    });

    this.createExpedientesDePessoaFisica(this.dadoProfissao.expedientes);
  }

  private async updateDadosDeProfissao() {
    await this.yc.request({
      action: YC_ACTION.UPDATE,
      object: {
        classUID: 'dadosdeprofissao',
        id: this.dadoProfissao.id,
        graudeinstrucao: this.dadoProfissao.grauDeInstrucao,
        publico: this.dadoProfissao.publico,
        status: this.dadoProfissao.status,
        role: 'ROLE_ADMIN',
        especialidade: {
          classUID: 'especialidade',
          id: this.dadoProfissao.especialidade.id,
          role: 'ROLE_ADMIN',
          nome: this.dadoProfissao.especialidade.nome,
          profissao: {
            id: this.dadoProfissao.especialidade.profissao.id,
            role: 'ROLE_ADMIN',
            classUID: 'profissao',
          },
        },
        pessoafisica: {
          classUID: 'pessoafisica',
          id: this.dadoProfissao.pessoaFisicaID,
          role: 'ROLE_ADMIN',
        },
      },
    });

    const expedientesNovos = this.dadoProfissao.expedientes.filter((e) => {
      e.id == null;
    });
    const expedientesExistentes = this.dadoProfissao.expedientes.filter((e) => {
      e.id != null;
    });
    this.createExpedientesDePessoaFisica(expedientesNovos);
    this.updateExpedientesDePessoaFisica(expedientesExistentes);
  }

  async updateExpedientesDePessoaFisica(
    expedientesExistentes: ExpedienteDePessoaFisica[]
  ) {
    if (expedientesExistentes.length == 0) return;

    const objectsExpedientes: any[] = expedientesExistentes.map((e) => {
      return {
        classUID: 'expedientedepessoafisica',
        role: 'ROLE_ADMIN',
        id: e.id,
        diadasemana: e.diaDaSemana,
        inicio: e.inicio,
        termino: e.termino,
        recorrencia: e.recorrencia,
        pessoajuridica: {
          classUID: 'pessoajuridica',
          id: 1,
          role: 'ROLE_ADMIN',
        },
        dadosdeprofissao: {
          classUID: 'dadosdeprofissao',
          role: 'ROLE_ADMIN',
          id: this.dadoProfissao.id,
        },
      };
    });

    await this.yc.request({
      action: YC_ACTION.UPDATE,
      object: objectsExpedientes,
    });
  }

  async createExpedientesDePessoaFisica(
    expedientesNovos: ExpedienteDePessoaFisica[]
  ) {
    if (expedientesNovos.length == 0) return;

    const objectsExpedientes: any[] = expedientesNovos.map((e) => {
      return {
        classUID: 'expedientedepessoafisica',
        role: 'ROLE_ADMIN',
        diadasemana: e.diaDaSemana,
        inicio: e.inicio,
        termino: e.termino,
        recorrencia: e.recorrencia,
        pessoajuridica: {
          classUID: 'pessoajuridica',
          id: 1,
          role: 'ROLE_ADMIN',
        },
        dadosdeprofissao: {
          classUID: 'dadosdeprofissao',
          role: 'ROLE_ADMIN',
          id: this.dadoProfissao.id,
        },
      };
    });
    await this.yc.request({
      action: YC_ACTION.CREATE,
      object: objectsExpedientes,
    });
  }

  async deleteExpediente(id: number) {
    await this.yc.request({
      action: YC_ACTION.DELETE,
      object: {
        id: id,
        classUID: 'expedientedepessoafisica',
        role: 'ROLE_ADMIN',
      },
    });
  }

  async deleteDadosDeProfissao() {
    for (let e of this.dadoProfissao.expedientes) {
      await this.deleteExpediente(e.id);
    }
    await this.yc.request({
      action: YC_ACTION.DELETE,
      object: {
        id: this.dadoProfissao.id,
        classUID: 'dadosdeprofissao',
        role: 'ROLE_ADMIN',
      },
    });
    this.navCtrl.pop();
  }

  async saveDadosProfissionais() {
    if (this.dadoProfissao.id) {
      await this.updateDadosDeProfissao();
    } else {
      await this.createDadosDeProfissao();
    }
    this.navCtrl.pop();
  }

  diaDaSemanaNome(dia: WeekDay): string {
    const nome = DateUtils.diaDaSemanaNome(dia, { capitalize: true });
    return StringUtils.capilatize(nome);
  }
}
