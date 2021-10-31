import { WeekDay, Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ExpedienteDeUnidade } from 'src/app/models/pessoas/pessoa-juridica/expediente-unidade';
import { DateUtils } from 'src/app/utils/date-utils';
import { ClonerService } from 'src/app/services/cloner/cloner.service';

@Component({
  selector: 'app-edit-expediente',
  templateUrl: './edit-expediente.page.html',
  styleUrls: ['./edit-expediente.page.scss'],
})
export class EditExpedientePage implements OnInit {
  diasSemana: Array<number> = [];

  horaInicio: string;
  horaFim: string;

  expediente: ExpedienteDeUnidade;
  constructor(
    private navCtrl: NavController,
    private router: Router,
    private cloner: ClonerService
  ) {}

  ngOnInit() {
    this.diasSemana = DateUtils.diasSemana.map((wd: WeekDay) => wd.valueOf());

    const params = this.router.getCurrentNavigation().extras.state;
    if (params) {
      this.expediente = this.cloner.deepClone(params as ExpedienteDeUnidade);
    } else {
      this.expediente = new ExpedienteDeUnidade(
        0,
        this.diasSemana[0],
        1,
        { hours: 0, minutes: 0 },
        { hours: 0, minutes: 0 }
      );
    }
  }

  getNomeDiaSemana = DateUtils.diaDaSemanaNome;

  onSelectChange(event: Event) {
    console.log('onSelectChange: ', event);
  }

  onSave() {
    this.navCtrl.pop();
  }
  onCancel() {
    this.navCtrl.pop();
  }
}
