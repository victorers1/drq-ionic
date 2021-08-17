import { Injectable } from '@angular/core';
import { AlertButton, AlertController, AlertInput } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public alertCtrl: AlertController) { }

  async alert(
    header?: string,
    subHeader?: string,
    msg?: string,
    buttons?: (string | AlertButton)[],
    inputs?: AlertInput[]
  ) {
    return await this.alertCtrl.create({
      header: header ?? 'Alerta',
      subHeader: subHeader ?? '',
      message: msg ?? 'Mensagem de alerta.',
      buttons: buttons,
      backdropDismiss: false,
      animated: true,
      inputs: inputs,
    });
  }


}
