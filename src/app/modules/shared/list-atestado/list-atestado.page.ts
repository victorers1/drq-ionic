import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DRQRoutes } from 'src/app/constants';

@Component({
  selector: 'app-list-atestado',
  templateUrl: './list-atestado.page.html',
  styleUrls: ['./list-atestado.page.scss'],
})
export class ListAtestadoPage implements OnInit {
  dataInicio: string;
  dataFim: string;
  routes = new DRQRoutes();

  constructor(private navCtrl: NavController, private route: ActivatedRoute) {}

  ngOnInit() {}

  onChange(event: Event) {
    // filtrar
  }

  escolherDataInicio() {}

  onClickLimpar() {
    this.dataInicio = null;
    this.dataFim = null;
  }

  onClickAtestado() {
    this.navCtrl.navigateForward([this.routes.EDIT_ATESTADO], {
      relativeTo: this.route,
    });
  }
}
