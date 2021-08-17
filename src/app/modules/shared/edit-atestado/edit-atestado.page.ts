import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-atestado',
  templateUrl: './edit-atestado.page.html',
  styleUrls: ['./edit-atestado.page.scss'],
})
export class EditAtestadoPage implements OnInit {
  inicio: string;
  fim: string;

  constructor() { }

  ngOnInit() {
  }

  onChange(event: Event) {
    console.log(`event:`, event);
  }

  onClickLimpar() {
    this.inicio = null;
    this.fim = null;
  }
}
