import { Injectable } from '@angular/core';
import { ModalController, ModalOptions } from '@ionic/angular';
import { SelectEspecialidadePage } from 'src/app/modules/shared/select-especialidade/select-especialidade.page';
import { SelectHorarioPage } from 'src/app/modules/shared/select-horario/select-horario.page';
import { SelectPlanoSaudePage } from 'src/app/modules/shared/select-plano-saude/select-plano-saude.page';
import { SelectProfissaoPage } from 'src/app/modules/shared/select-profissao/select-profissao.page';
import { SelectProfissionalPage } from 'src/app/modules/shared/select-profissional/select-profissional.page';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(public modalCtrl: ModalController) {}

  async selecionarPlanoSaude(componentProps?: ModalOptions) {
    const modal = await this.modalCtrl.create({
      component: SelectPlanoSaudePage,
      showBackdrop: true,
      backdropDismiss: true,
      swipeToClose: true,
      componentProps: componentProps,
    });
    return await modal.present();
  }

  async selecionarHorario(componentProps?: ModalOptions) {
    const modal = await this.modalCtrl.create({
      component: SelectHorarioPage,
      showBackdrop: true,
      backdropDismiss: true,
      swipeToClose: true,
      componentProps: componentProps,
    });
    return await modal.present();
  }

  async selecionarProfissional(componentProps?: ModalOptions) {
    const modal = await this.modalCtrl.create({
      component: SelectProfissionalPage,
      showBackdrop: true,
      backdropDismiss: true,
      swipeToClose: true,
      componentProps: componentProps,
    });
    return await modal.present();
  }

  async selecionarProfissao(componentProps?: ModalOptions) {
    const modal = await this.modalCtrl.create({
      component: SelectProfissaoPage,
      showBackdrop: true,
      backdropDismiss: true,
      swipeToClose: true,
      componentProps: componentProps,
    });
    return modal;
  }

  async selecionarEspecialidade(componentProps?: ModalOptions) {
    const modal = await this.modalCtrl.create({
      component: SelectEspecialidadePage,
      showBackdrop: true,
      backdropDismiss: true,
      swipeToClose: true,
      componentProps: componentProps,
    });
    return modal;
  }
}
