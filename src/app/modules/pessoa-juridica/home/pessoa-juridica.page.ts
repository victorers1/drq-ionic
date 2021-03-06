import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DRQRoutes } from 'src/app/constants';
import { PessoaJuridicaService } from 'src/app/services/usuario/pessoa-juridica.service';

@Component({
  selector: 'pessoa-juridica',
  templateUrl: './pessoa-juridica.page.html',
  styleUrls: ['./pessoa-juridica.page.scss'],
})
export class HomePage implements OnInit {
  routes = new DRQRoutes();

  constructor(
    private navCtrl: NavController,
    public usuarioCtrl: PessoaJuridicaService
  ) {}

  ngOnInit() {}

  logOut(): void {
    console.log(`${this.usuarioCtrl.usuario.email} is loging out`);
    this.navCtrl.navigateRoot('login');
  }
}
