import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Profissao } from 'src/app/models/geral/profissao';
import {
  IListaProfissao,
  LISTA_PROFISSOES_QUERY,
} from 'src/app/apollo-constants';
import { ApolloService } from 'src/app/services/apollo/apollo-service.service';

@Component({
  selector: 'app-select-profissao',
  templateUrl: './select-profissao.page.html',
  styleUrls: ['./select-profissao.page.scss'],
})
export class SelectProfissaoPage implements OnInit {
  profissoes: Profissao[] = [];

  constructor(
    private apolloService: ApolloService,
    private modalCtrl: ModalController
  ) {}

  async ngOnInit() {
    const result = await this.apolloService.query<IListaProfissao>({
      query: LISTA_PROFISSOES_QUERY,
    });

    this.profissoes = result.data.dadosGeral_Profissao.map<Profissao>(
      (p) => new Profissao(p.id, p.nome)
    );
  }

  onTapProfissao(p: Profissao) {
    this.modalCtrl.dismiss({ p });
  }
}
