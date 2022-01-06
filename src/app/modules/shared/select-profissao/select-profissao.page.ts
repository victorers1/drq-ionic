import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Profissao } from 'src/app/models/geral/profissao';

@Component({
  selector: 'app-select-profissao',
  templateUrl: './select-profissao.page.html',
  styleUrls: ['./select-profissao.page.scss'],
})
export class SelectProfissaoPage implements OnInit {
  profissoes: Profissao[] = [];

  constructor(private modalCtrl: ModalController) {}

  async ngOnInit() {
    const result = '';
  }

  onTapProfissao(p: Profissao) {
    this.modalCtrl.dismiss({ p });
  }
}
