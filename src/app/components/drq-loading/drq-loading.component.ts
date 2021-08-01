import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'drq-loading',
  templateUrl: './drq-loading.component.html',
  styleUrls: ['./drq-loading.component.scss'],
})
export class DrqLoadingComponent implements OnInit {
  @Input('titulo') titulo: string;
  constructor() { }

  ngOnInit() {
    console.log('DrqLoadingComponent:', { titulo: this.titulo });
  }
}
