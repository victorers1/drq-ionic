import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IReadAllEspecialidade } from 'src/app/apollo-constants';

import { Especialidade } from 'src/app/models/geral/especialidade';
import { Profissao } from 'src/app/models/geral/profissao';
import { YCodifyService, YC_ACTION } from 'src/app/services/yc/yc.service';

@Component({
  selector: 'app-select-especialidade',
  templateUrl: './select-especialidade.page.html',
  styleUrls: ['./select-especialidade.page.scss'],
})
export class SelectEspecialidadePage implements OnInit {
  @Input() profissao: Profissao;
  especialidades: Especialidade[] = [];

  constructor(private modalCtrl: ModalController, private yc: YCodifyService) {}

  async ngOnInit() {
    console.log('On Especialidade-Modal: ', { profissao: this.profissao });

    const result = await this.yc.request<IReadAllEspecialidade>({
      action: YC_ACTION.READ,
      object: {
        classUID: 'especialidade',
        role: 'ROLE_ADMIN',
        profissao: {
          classUID: 'profissao',
          id: this.profissao.id,
          role: 'ROLE_ADMIN',
        },
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

    this.especialidades = result.data.map(
      (p) => new Especialidade(p.id, p.nome, this.profissao)
    );
  }

  onTapEspecialidade(e: Especialidade) {
    this.modalCtrl.dismiss({ e });
  }
}
