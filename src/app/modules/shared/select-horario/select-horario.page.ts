import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IExpedienteDePessoaFisica, YCArray } from 'src/app/interfaces';
import { YCodifyService, YC_ACTION } from 'src/app/services/yc/yc.service';

@Component({
  selector: 'app-select-horario',
  templateUrl: './select-horario.page.html',
  styleUrls: ['./select-horario.page.scss'],
})
export class SelectHorarioPage implements OnInit {
  horarios: String[] = [];

  constructor(private modalCtrl: ModalController, private yc: YCodifyService) {}

  async ngOnInit() {
    const result = await this.yc.request<YCArray<IExpedienteDePessoaFisica>>({
      action: YC_ACTION.READ,
      object: {
        classUID: 'expedientedepessoafisica',
        dadosdeprofissao: {
          classUID: 'dadosdeprofissao',
          id: 6,
        },
        pessoajuridica: {
          classUID: 'pessoajuridica',
          role: 'ROLE_ADMIN',
          id: 1,
        },
      },
    });

    this.horarios = result.data.map((h) => h.inicio);
  }

  buttonSair() {
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }
}
