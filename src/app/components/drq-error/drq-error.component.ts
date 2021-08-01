import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'drq-error',
  templateUrl: './drq-error.component.html',
  styleUrls: ['./drq-error.component.scss'],
})
export class DrqErrorComponent implements OnInit {
  @Input('icone') icone: string;
  @Input('titulo') titulo: string;
  @Input('mensagem') mensagem: string;
  constructor() { }

  ngOnInit() {
    this.icone = this.icone ?? 'sad-outline';
    console.log(`DrqErrorComponent:`, { icone: this.icone, titulo: this.titulo, mensagem: this.mensagem });
  }

}

