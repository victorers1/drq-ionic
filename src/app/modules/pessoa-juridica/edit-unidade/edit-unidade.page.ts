import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DRQRoutes } from 'src/app/constants';
import { Unidade } from 'src/app/models/pessoas/unidade';
import { DateUtils } from 'src/app/utils/date-utils';

@Component({
  selector: 'app-edit-unidade',
  templateUrl: './edit-unidade.page.html',
  styleUrls: ['./edit-unidade.page.scss'],
})
export class EditUnidadePage implements OnInit {
  routes = new DRQRoutes();
  unidade: Unidade;

  constructor(private router: Router, private route: ActivatedRoute, private navCtrl: NavController) { }

  ngOnInit() {
    const params = this.router.getCurrentNavigation().extras.state;
    console.log(`params:`, params);

    if (params) {
      this.unidade = params as Unidade;
    }
  }

  onClickExpediente(indexExpediente: number) {
    console.log(`onClickExpediente(${indexExpediente})`);
    this.navCtrl.navigateForward(
      [this.routes.EDIT_EXPEDIENTE],
      {
        state: this.unidade.expedientes[indexExpediente],
        relativeTo: this.route,
      }
    );
  }

  getDiaSemanaNome(indexExpediente: number): string {
    return DateUtils.diaDaSemanaNome(this.unidade.expedientes[indexExpediente].diaDaSemana);
  }

  getTimeFormatado(time: Time): string {
    return DateUtils.getTimeFormatado(time);
  }

  addExpediente() { }
}
