import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'drq-header',
  templateUrl: './drq-header.component.html',
  styleUrls: ['./drq-header.component.scss'],
})
export class DrqHeaderComponent implements OnInit {
  @Input('titulo') title: string;
  @Input('showArrowBack') showArrowBack: boolean = true;

  constructor() { }

  ngOnInit() {
    console.log(`DrqHeaderComponent: `, { title: this.title, showArrowBack: this.showArrowBack });

  }

}
