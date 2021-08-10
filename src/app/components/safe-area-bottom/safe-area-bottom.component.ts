import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'safe-area-bottom',
  templateUrl: './safe-area-bottom.component.html',
  styleUrls: ['./safe-area-bottom.component.scss'],
})
export class SafeAreaBottomComponent implements OnInit {
  @Input('spacing') spacing: number = 4;
  constructor() { }

  ngOnInit() {
    console.log(`SafeAreaBottomComponent:`, { spacing: this.spacing });
  }

}
