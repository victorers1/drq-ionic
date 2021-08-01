import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'drq-empty',
  templateUrl: './drq-empty.component.html',
  styleUrls: ['./drq-empty.component.scss'],
})
export class DrqEmptyComponent implements OnInit {
  @Input('icone') icone: string;
  @Input('titulo') titulo: string;
  @Input('mensagem') mensagem: string;

  constructor() { }

  ngOnInit() {
    this.icone = this.icone ?? 'cube-outline';
    console.log(`DrqEmptyComponent:`, { icone: this.icone, titulo: this.titulo, mensagem: this.mensagem });
  }

}
