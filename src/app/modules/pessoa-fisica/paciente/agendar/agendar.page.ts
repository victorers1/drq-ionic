import { Component, OnInit, ViewChild } from '@angular/core';
import { IonAccordionGroup, NavController } from '@ionic/angular';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { TimeUtils } from 'src/app/utils/time-utils';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.page.html',
  styleUrls: ['./agendar.page.scss'],
})
export class AgendarPage implements OnInit {
  @ViewChild(IonAccordionGroup, { static: true })
  accordionGroup: IonAccordionGroup;

  accStates: Array<string> = ['Paciente', 'Profissional', 'Confirmação'];
  accordionState = this.accStates[0];
  dependentes: Array<Dependente> = [
    { id: '0', nome: 'Francisco Dependente I' },
    { id: '1', nome: 'Francisca Dependente II' },
  ];
  dependenteSelecionado: string = '83983';

  constructor(
    public modal: ModalService,
    public loading: LoadingService,
    public navCtrl: NavController
  ) {}

  ngOnInit() {}

  setAccordionNextState() {
    const qtdStates = this.accStates.length;
    const indexAccordionState = this.accStates.indexOf(
      this.getAccordionState()
    );

    if (qtdStates === indexAccordionState + 1) {
      this.onSubmitAgendar();
    } else {
      this.accordionState =
        this.accStates[(indexAccordionState + 1) % qtdStates];
    }
  }

  async onSubmitAgendar() {
    // simula função assíncrona
    const load = await this.loading.carregando();
    load.present();
    await TimeUtils.delay(2000);
    load.dismiss();
    this.navCtrl.pop();
  }

  getAccordionState(): string {
    return typeof this.accordionGroup.value == 'string'
      ? this.accordionGroup.value
      : this.accordionGroup.value[0];
  }

  onAccordionChange(event: Event) {
    this.accordionState = (event as CustomEvent).detail.value;
    console.log('onAccordionChange: ', event);
  }
}

interface Dependente {
  id: string;
  nome: string;
}
