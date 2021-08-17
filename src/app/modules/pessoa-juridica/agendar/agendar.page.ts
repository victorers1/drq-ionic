import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonAccordionGroup, ModalController, NavController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert/alert.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { TimeUtils } from 'src/app/utils/time-utils';
import { SelectHorarioPage } from '../../shared/select-horario/select-horario.page';
import { SelectPlanoSaudePage } from '../../shared/select-plano-saude/select-plano-saude.page';
import { SelectProfissionalPage } from '../../shared/select-profissional/select-profissional.page';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.page.html',
  styleUrls: ['./agendar.page.scss'],
})
export class AgendarPage implements OnInit {
  @ViewChild(IonAccordionGroup, { static: true }) accordionGroup: IonAccordionGroup;

  accStates = ['Cliente', 'Profissional', 'Confirmação'];
  accordionState = this.accStates[0];

  constructor(
    public modal: ModalService,
    public loading: LoadingService,
    public navCtrl: NavController,
  ) { }

  ngOnInit() { }

  setAccordionNextState() {
    const qtdStates = this.accStates.length;
    const indexAccordionState = this.accStates.indexOf(this.getAccordionState());

    if (qtdStates == indexAccordionState + 1) {
      console.log(`submit solicitação`);
      this.onSubmitAgendar();
    } else {
      this.accordionState = this.accStates[(indexAccordionState + 1) % qtdStates]
    }
  }

  async onSubmitAgendar() {
    // simula função assíncrona
    const load = await this.loading.carregando();
    load.present();

    await TimeUtils.delay(4000);

    load.dismiss();

    this.navCtrl.pop();
  }

  getAccordionState(): string {
    return typeof this.accordionGroup.value == 'string' ?
      this.accordionGroup.value :
      this.accordionGroup.value[0];
  }

}
