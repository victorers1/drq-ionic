import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DRQRoutes } from 'src/app/constants';

@Component({
  selector: 'app-select-tipo-usuario',
  templateUrl: './select-tipo-usuario.page.html',
  styleUrls: ['./select-tipo-usuario.page.scss'],
})
export class SelectTipoUsuarioPage implements OnInit {
  drqRoutes = new DRQRoutes();

  userTypes = {
    0: this.drqRoutes.PESSOA_FISICA_PROFISSIONAL,
    1: this.drqRoutes.PESSOA_FISICA_PACIENTE,
    2: this.drqRoutes.PESSOA_JURIDICA,
  };

  constructor(private navCtrl: NavController, private route: ActivatedRoute) {}

  ngOnInit() {}

  selectUserType(route: string) {
    console.log(`navigate to ${route}`);

    this.navCtrl.navigateForward([route]);
    this.navCtrl.navigateRoot([route], {
      // relativeTo: this.route,
    });
  }
}
