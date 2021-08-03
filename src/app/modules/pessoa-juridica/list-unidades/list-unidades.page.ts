import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DRQRoutes } from 'src/app/constants';
import { Unidade } from 'src/app/models/pessoas/unidade';
import { PessoaJuridicaService } from 'src/app/services/pessoa-juridica/pessoa-juridica.service';

@Component({
  selector: 'app-list-unidades',
  templateUrl: './list-unidades.page.html',
  styleUrls: ['./list-unidades.page.scss'],
})
export class ListUnidadesPage implements OnInit {
  routes = new DRQRoutes();

  constructor(private navCtrl: NavController, private route: ActivatedRoute, private usuarioCtrl: PessoaJuridicaService) { }

  ngOnInit() { }

  getUnidades(): Unidade[] {
    return this.usuarioCtrl.usuario.unidades;
  }

  onClick(unidadeIndex: number) {
    this.navCtrl.navigateForward(
      [this.routes.EDIT_UNIDADE],
      {
        state: this.getUnidades()[unidadeIndex],
        relativeTo: this.route
      }
    );
  }
}
