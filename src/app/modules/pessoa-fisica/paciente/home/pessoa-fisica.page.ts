import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DRQRoutes } from 'src/app/constants';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-pessoa-fisica',
  templateUrl: './pessoa-fisica.page.html',
  styleUrls: ['./pessoa-fisica.page.scss'],
})
export class PessoaFisicaPage implements OnInit {
  routes = new DRQRoutes();

  constructor(
    public navCtrl: NavController,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {}

  logOut(): void {
    console.log(`${this.usuarioService.get().usuario.username} is loging out`);
    this.navCtrl.navigateRoot('login');
  }
}
