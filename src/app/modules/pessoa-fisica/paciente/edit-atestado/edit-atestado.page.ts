import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-atestado',
  templateUrl: './edit-atestado.page.html',
  styleUrls: ['./edit-atestado.page.scss'],
})
export class EditAtestadoPage implements OnInit {
  inicio: string;
  fim: string;

  descricao =
    'Atesto que o paciente Victor Emanuel está apto para o cargo de Chefe Executivos de Sistemas Analistas Sênior na empresa Microsoft Corporation.';

  constructor() {}

  ngOnInit() {}

  onChange(event: Event) {
    console.log(`event:`, event);
  }

  onClickLimpar() {
    this.inicio = null;
    this.fim = null;
  }

  onDownloadButton() {
    console.log('baixando atestado...');
  }
}
