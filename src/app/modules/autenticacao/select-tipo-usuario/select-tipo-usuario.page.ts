import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DRQRoutes, TIPO_USUARIO } from 'src/app/constants';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-select-tipo-usuario',
  templateUrl: './select-tipo-usuario.page.html',
  styleUrls: ['./select-tipo-usuario.page.scss'],
})
export class SelectTipoUsuarioPage implements OnInit {
  drqRoutes = new DRQRoutes();
  constructor(
    public usuarioService: UsuarioService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  selectUserType(route: string) {
    console.log(`navigate to ${route}`);

    this.setTipoUsuario(route);

    this.navCtrl.navigateForward([route]);
    this.navCtrl.navigateRoot([route]);
  }

  private setTipoUsuario(route: string) {
    switch (route) {
      case this.drqRoutes.PESSOA_FISICA_PROFISSIONAL:
        this.usuarioService.tipoUsuario == TIPO_USUARIO.PROFISSIONAL;
        break;

      case this.drqRoutes.PESSOA_FISICA_PACIENTE:
        this.usuarioService.tipoUsuario == TIPO_USUARIO.PACIENTE;
        break;

      case this.drqRoutes.PESSOA_JURIDICA:
        this.usuarioService.tipoUsuario == TIPO_USUARIO.PESSOA_JURIDICA;
        break;

      default:
        this.usuarioService.tipoUsuario == TIPO_USUARIO.INVALIDO;
        break;
    }
  }
}
