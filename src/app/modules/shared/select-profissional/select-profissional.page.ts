import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-select-profissional',
  templateUrl: './select-profissional.page.html',
  styleUrls: ['./select-profissional.page.scss'],
})
export class SelectProfissionalPage implements OnInit {
  profissionais = [
    'Dr. Fulano da Silva',
    'Dr. João Maria',
    'Dr. João Medeiros',
    'Dr. Pedro Lopez Cardoso',
    'Dra. Maria João',
    'Dra. Fulana Campos',
  ];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  buttonSair() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
