import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DRQRoutes, TIPO_USUARIO } from 'src/app/constants';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-list-atestado',
  templateUrl: './list-atestado.page.html',
  styleUrls: ['./list-atestado.page.scss'],
})
export class ListAtestadoPage implements OnInit {
  routes = new DRQRoutes();
  dataInicio: string;
  dataFim: string;

  constructor(
    public usuario: UsuarioService,
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) {}

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
