import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IProfissao, IReadAllProfissao } from 'src/app/interfaces';
import { Profissao } from 'src/app/models/geral/profissao';
import { YCodifyService, YC_ACTION } from 'src/app/services/yc/yc.service';

@Component({
  selector: 'app-select-profissao',
  templateUrl: './select-profissao.page.html',
  styleUrls: ['./select-profissao.page.scss'],
})
export class SelectProfissaoPage implements OnInit {
  profissoes: Profissao[] = [];

  constructor(private modalCtrl: ModalController, private yc: YCodifyService) {}

  async ngOnInit() {
    const result = await this.yc.request<IReadAllProfissao>({
      action: YC_ACTION.READ,
      object: {
        classUID: 'profissao',
        role: 'ROLE_ADMIN',
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

    this.profissoes = result.data.map((p) => new Profissao(p.id, p.nome));
  }

  onTapProfissao(p: Profissao) {
    this.modalCtrl.dismiss({ p });
  }
}
