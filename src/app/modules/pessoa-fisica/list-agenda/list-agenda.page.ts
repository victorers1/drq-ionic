import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DRQRoutes, STATUS_ATENDIMENTO } from 'src/app/constants';

@Component({
  selector: 'app-list-agenda',
  templateUrl: './list-agenda.page.html',
  styleUrls: ['./list-agenda.page.scss'],
})
export class ListAgendaPage implements OnInit {
  routes = new DRQRoutes();
  segmentState = 'c';

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) { }

  ngOnInit() { }

  onClickAtendimento(indexAtendimento: number) {
    this.navCtrl.navigateForward(
      [this.routes.EDIT_ATENDIMENTO],
      {
        state: { indexAtendimento: indexAtendimento },
        relativeTo: this.route,
      }
    );
  }

  segmentChanged(event: Event) {
    console.log(`segmentEvent:`, event);
    this.segmentState = (event as CustomEvent).detail['value'];
  }
}
