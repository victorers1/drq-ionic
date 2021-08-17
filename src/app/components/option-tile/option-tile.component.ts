import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'option-tile',
  templateUrl: './option-tile.component.html',
  styleUrls: ['./option-tile.component.scss'],
})
export class OptionTileComponent implements OnInit {
  @Input('title') title: string;
  @Input('link') link: string;
  @Input('icone') icone: string;
  @Input('badge') badge: number;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    console.log(
      'OptionTileComponent:',
      {
        title: this.title,
        icone: this.icone,
        badge: this.badge,
        link: this.link,
      });
  }

  onTap() {
    if (this.link != null) {
      this.navCtrl.navigateForward(this.link);
    } else {
      console.log('Não foi possível navegar para o link', this.link);
    }
  }
}
