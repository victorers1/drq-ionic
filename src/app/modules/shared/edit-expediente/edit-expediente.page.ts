import { WeekDay, Time } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DateUtils } from 'src/app/utils/date-utils';
import { ExpedienteDePessoaFisica } from 'src/app/models/pessoas/pessoa-fisica/expediente-pessoa-fisica';
import { ApolloService } from 'src/app/services/apollo/apollo-service.service';
import {
  EXPEDIENTE_DE_PESSOA_FISICA_QUERY,
  IExpedienteDePessoaFisicaByPK,
} from 'src/app/apollo-constants';

@Component({
  selector: 'app-edit-expediente',
  templateUrl: './edit-expediente.page.html',
  styleUrls: ['./edit-expediente.page.scss'],
})
export class EditExpedientePage implements OnInit {
  @Input() expediente: ExpedienteDePessoaFisica;
  @Input() idDadoProfissao: number;

  diasSemana: number[] = [];

  diaDaSemanaNome = DateUtils.diaDaSemanaNome;
  getTimeFromString = DateUtils.getTimeFromISO8601String;
  getTimeFormatado = DateUtils.getTimeFormatado;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    this.diasSemana = DateUtils.diasSemana.map((wd: WeekDay) => wd.valueOf());

    if (this.expediente == null) {
      this.expediente = new ExpedienteDePessoaFisica(
        this.idDadoProfissao,
        null,
        this.diasSemana[0],
        1,
        { hours: 0, minutes: 0 },
        { hours: 0, minutes: 0 }
      );
    }
  }

  onDiaDaSemanaChange(event: Event) {
    console.log('onDiaDaSemanaChange: ', event);
    this.expediente.diaDaSemana = (event as CustomEvent).detail.value;
  }
  onSave() {
    console.log(`this.expediente: `, this.expediente);
    this.modalCtrl.dismiss();
  }
}
