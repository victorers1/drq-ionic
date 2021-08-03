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

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    console.log('OptionTileComponent: ', { title: this.title, link: this.link, icone: this.icone });
  }

  onTap() {
    console.log('onTap()');
    this.navCtrl.navigateForward(this.link);
  }

}
