import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-atestado',
  templateUrl: './list-atestado.page.html',
  styleUrls: ['./list-atestado.page.scss'],
})
export class ListAtestadoPage implements OnInit {
  inicio: string;
  fim: string;
  mostrarVencidos: boolean = false;


  constructor() { }

  ngOnInit() { }

  onChange(event: Event) {
    // filtrar
  }

  escolherDataInicio() {
  }

  onClickLimpar() {
    this.inicio = null;
    this.fim = null;
    this.mostrarVencidos = false;
  }
}
