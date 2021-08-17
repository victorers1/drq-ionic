import { Injectable } from '@angular/core';
import { LoadingController, LoadingOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(public loadingCtrl: LoadingController) { }

  /**
   * Para apresentar o componente: `await loading.present();`
   * Para fechá-lo: `load.dismiss();`
   * 
   * Ao ser fechado, podemos ver o resultado:
   * ```
   * const { role, data } = await loading.onDidDismiss();
   * console.log('Loading disperso:', { role: role, data: data });
   * ```
   * @param options parâmetros aplicados ao loading
   * @returns `{ role, data }`
   */
  async carregando(options?: LoadingOptions) {
    return await this.loadingCtrl.create({
      spinner: options?.spinner ?? 'crescent',
      duration: options?.duration ?? 1000,
      message: options?.message ?? 'Carregando...',
      translucent: true,
      backdropDismiss: false,
      showBackdrop: true,
      keyboardClose: true,
    });
  }
}
