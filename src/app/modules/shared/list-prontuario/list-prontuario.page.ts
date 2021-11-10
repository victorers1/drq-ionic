import { Component, OnInit } from '@angular/core';
import { TIPOS_USUARIOS, TIPO_PESSOA_JURIDICA } from 'src/app/constants';
import { ListPageService } from '../../../services/list-page/list-page.service';
@Component({
  selector: 'app-list-prontuario',
  templateUrl: './list-prontuario.page.html',
  styleUrls: ['./list-prontuario.page.scss'],
})
export class ListProntuarioPage implements OnInit {
  dataInicio: string;
  dataFim: string;

  tipoUsuario: TIPOS_USUARIOS;

  constructor(public listPageService: ListPageService) {}

  ngOnInit() {}

  onClickProntuario() {}

  escolherDataInicio() {}

  onClickLimpar() {
    this.dataInicio = null;
    this.dataFim = null;
  }
}
