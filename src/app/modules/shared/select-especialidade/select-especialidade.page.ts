import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Especialidade } from 'src/app/models/geral/especialidade';

@Component({
  selector: 'app-select-especialidade',
  templateUrl: './select-especialidade.page.html',
  styleUrls: ['./select-especialidade.page.scss'],
})
export class SelectEspecialidadePage implements OnInit {
  @Input() id: number;
  especialidades: Especialidade[] = [];

  constructor(private modalCtrl: ModalController) {}

  async ngOnInit() {
    console.log('On Especialidade-Modal: ', { idProfissao: this.id });

    // TODO query de recuperar especialidades
    let result = '';
  }

  onTapEspecialidade(e: Especialidade) {
    this.modalCtrl.dismiss({ e });
  }
}
