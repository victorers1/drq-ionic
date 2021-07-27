import { Component, OnInit } from '@angular/core';
import { DRQRoutes } from 'src/app/constants';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-config-dados',
  templateUrl: './config-dados.page.html',
  styleUrls: ['./config-dados.page.scss'],
})
export class ConfigDadosPage implements OnInit {
  routes = new DRQRoutes();

  constructor(public usuarioCtrl: UsuarioService) { }

  ngOnInit() { }
}
