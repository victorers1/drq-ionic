import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SelectHorarioPage } from 'src/app/modules/shared/select-horario/select-horario.page';
import { SelectPlanoSaudePage } from 'src/app/modules/shared/select-plano-saude/select-plano-saude.page';
import { SelectProfissionalPage } from 'src/app/modules/shared/select-profissional/select-profissional.page';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(public modalCtrl: ModalController) { }

  async selecionarPlanoSaude(componentProps?: any) {
    const modal = await this.modalCtrl.create({
      component: SelectPlanoSaudePage,
      showBackdrop: true,
      backdropDismiss: true,
      swipeToClose: true,
      componentProps: componentProps,
    });
    return await modal.present();
  }

  async selecionarHorario(componentProps?: any) {
    const modal = await this.modalCtrl.create({
      component: SelectHorarioPage,
      showBackdrop: true,
      backdropDismiss: true,
      swipeToClose: true,
      componentProps: componentProps,
    });
    return await modal.present();
  }

  async selecionarProfissional(componentProps?: any) {
    const modal = await this.modalCtrl.create({
      component: SelectProfissionalPage,
      showBackdrop: true,
      backdropDismiss: true,
      swipeToClose: true,
      componentProps: componentProps,
    });
    return await modal.present();
  }
}
