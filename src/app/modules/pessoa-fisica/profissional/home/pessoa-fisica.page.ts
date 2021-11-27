import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { DRQRoutes, TIPO_USUARIO } from 'src/app/constants';
import { Profissional } from 'src/app/models/pessoas/pessoa-fisica/profissional';
import { ProfissionalService } from 'src/app/services/usuario/profissional.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-pessoa-fisica',
  templateUrl: './pessoa-fisica.page.html',
  styleUrls: ['./pessoa-fisica.page.scss'],
})
export class PessoaFisicaPage implements OnInit {
  routes = new DRQRoutes();
  profissionalService: ProfissionalService;
  profissional: Profissional;

  constructor(
    public navCtrl: NavController,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    // ! tipo usuário deve ser setado antes de carregar usuário
    this.usuarioService.tipoUsuario = TIPO_USUARIO.PROFISSIONAL;
    this.profissionalService = this.usuarioService.get() as ProfissionalService;
    this.profissionalService
      .getProfissional(5)
      .valueChanges.subscribe(({ data }) => {
        const {
          username,
          nome,
          docFiscal,
          email,
          sexo,
          rg,
          foneUm,
          endLogradouro,
          endNumero,
          endBairro,
          endCidade,
          endEstado,
          endPais,
          endCEP,
          dataDeNascimento,
        } = data['PessoaFisica'][0];

        this.profissionalService.usuario = new Profissional(
          username,
          nome,
          docFiscal,
          email,
          endLogradouro,
          endNumero,
          endBairro,
          endCidade,
          endEstado,
          endPais,
          dataDeNascimento,
          sexo
        );
        this.profissionalService.usuario.rg = rg;
        this.profissionalService.usuario.endCEP = endCEP;
        this.profissionalService.usuario.foneUm = foneUm;

        this.profissional = this.profissionalService.usuario;
        console.log('profissional: ', this.profissional);
      });
  }

  logOut(): void {
    console.log(`${this.usuarioService.usuario.username} is loging out`);
    this.navCtrl.navigateRoot('login');
  }
}
