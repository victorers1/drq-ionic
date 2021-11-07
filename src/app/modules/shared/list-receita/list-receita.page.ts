import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DRQRoutes } from 'src/app/constants';

@Component({
  selector: 'app-list-receita',
  templateUrl: './list-receita.page.html',
  styleUrls: ['./list-receita.page.scss'],
})
export class ListReceitaPage implements OnInit {
  drqRoutes = new DRQRoutes();

  constructor(private navCtrl: NavController, private route: ActivatedRoute) {}

  ngOnInit() {}

  openReceita() {
    this.navCtrl.navigateForward([this.drqRoutes.EDIT_RECEITA], {
      relativeTo: this.route,
    });
  }
}
