import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DRQRoutes } from 'src/app/constants';
import { PessoaFisicaService } from 'src/app/services/pessoa-fisica/pessoa-fisica.service';

@Component({
  selector: 'app-pessoa-fisica',
  templateUrl: './pessoa-fisica.page.html',
  styleUrls: ['./pessoa-fisica.page.scss'],
})
export class PessoaFisicaPage implements OnInit {
  routes = new DRQRoutes();

  constructor(public navCtrl: NavController, private usuarioCtrl: PessoaFisicaService) { }

  ngOnInit() { }

  logOut(): void {
    console.log(`${this.usuarioCtrl.usuario.username} is loging out`);
    this.navCtrl.navigateRoot('login');
  }
}
