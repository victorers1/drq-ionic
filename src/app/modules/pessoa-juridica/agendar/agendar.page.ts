import { Component, OnInit, ViewChild } from '@angular/core';
import { IonAccordionGroup, ModalController } from '@ionic/angular';
import { SelectPlanoSaudePage } from '../../shared/select-plano-saude/select-plano-saude.page';

enum ACCORDION_STATE { CLIENTE = 'cliente', PROFISSIONAL = 'profissional', CONFIRMACAO = 'confirmacao' };
@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.page.html',
  styleUrls: ['./agendar.page.scss'],
})
export class AgendarPage implements OnInit {
  @ViewChild(IonAccordionGroup, { static: true }) accordionGroup: IonAccordionGroup;

  states = ['Cliente', 'Profissional', 'Confirmação'];
  currentState = this.states[0];

  constructor(public modalController: ModalController) { }

  ngOnInit() { }

  async presentPlanoSaudeModal() {
    const modal = await this.modalController.create({
      component: SelectPlanoSaudePage,
      showBackdrop: true,
      backdropDismiss: true,
      swipeToClose: true,
    });
    return await modal.present();
  }

  setAccordionNextState() {
    const qtdStates = this.states.length;
    const indexCurrentState = this.states.indexOf(this.currentState);

    if (qtdStates == indexCurrentState + 1) {
      console.log(`submit solicitação`);
    } else {
      this.currentState = this.states[(indexCurrentState + 1) % qtdStates]
    }
  }

  onSubmitAgendar() {
    console.log(`Agendando:`, {});
  }
}
