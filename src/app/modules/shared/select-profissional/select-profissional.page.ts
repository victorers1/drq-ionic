import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-select-profissional',
  templateUrl: './select-profissional.page.html',
  styleUrls: ['./select-profissional.page.scss'],
})
export class SelectProfissionalPage implements OnInit {
  profissionais: string[] = [];

  constructor(private modalCtrl: ModalController) {}

  async ngOnInit() {
    const result = '';
  }

  buttonSair() {
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }
}
