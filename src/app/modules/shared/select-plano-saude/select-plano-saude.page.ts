import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-select-plano-saude',
  templateUrl: './select-plano-saude.page.html',
  styleUrls: ['./select-plano-saude.page.scss'],
})
export class SelectPlanoSaudePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  onSearchBarChange(event: Event) {
    console.log(`onSearchBarChange:`, event);
  }

  buttonSair() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
