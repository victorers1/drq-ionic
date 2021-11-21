import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {
  DRQRoutes,
  TIPO_PESSOA_JURIDICA,
  TIPO_USUARIO,
} from 'src/app/constants';
import { Paciente } from 'src/app/models/pessoas/pessoa-fisica/paciente';
import { Profissional } from 'src/app/models/pessoas/pessoa-fisica/profissional';
import { PessoaJuridica } from 'src/app/models/pessoas/pessoa-juridica/pessoa-juridica';
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

    this.setUsuarioMock(route);
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

  private setUsuarioMock(route: string) {
    switch (route) {
      case this.drqRoutes.PESSOA_FISICA_PROFISSIONAL:
        this.usuarioService.usuario = new Profissional(
          'victorers2',
          'Victor Emanuel Ribeiro Silva',
          '0898328428',
          'victorers2@gmail.com',
          'Rua Hiroshi Ienaga',
          '1170',
          'Pajuçara',
          'Natal',
          'RN',
          'BRASIL',
          new Date(1996, 6, 13),
          'M',
          0
        );
        break;

      case this.drqRoutes.PESSOA_FISICA_PACIENTE:
        this.usuarioService.usuario = new Paciente(
          'victorers2',
          'Victor Emanuel Ribeiro Silva',
          '0898328428',
          'victorers2@gmail.com',
          'Rua Hiroshi Ienaga',
          '1170',
          'Pajuçara',
          'Natal',
          'RN',
          'BRASIL',
          new Date(1996, 6, 13),
          'M',
          0
        );

        break;

      case this.drqRoutes.PESSOA_JURIDICA:
        this.usuarioService.usuario = new PessoaJuridica(
          'victorers1',
          'Centro de Saúde Soledade II',
          '80744850000133',
          'Centro de Sáude do Soledade II',
          'Melhor Centro de Saúde do Soledade II',
          '',
          TIPO_PESSOA_JURIDICA.MATRIZ
        );
        break;

      default:
        this.usuarioService.usuario = null;
        break;
    }
  }
}
