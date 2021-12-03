import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Apollo } from 'apollo-angular';
import { first } from 'rxjs/operators';
import { Profissao } from 'src/app/models/geral/profissao';
import { IListaProfissao, LISTA_PROFISSOES } from 'src/app/query-constants';

@Component({
  selector: 'app-select-profissao',
  templateUrl: './select-profissao.page.html',
  styleUrls: ['./select-profissao.page.scss'],
})
export class SelectProfissaoPage implements OnInit {
  profissoes: Profissao[];

  constructor(private apollo: Apollo, private modalCtrl: ModalController) {}

  async ngOnInit() {
    const result = await this.apollo
      .watchQuery<IListaProfissao>({
        query: LISTA_PROFISSOES,
      })
      .valueChanges.pipe(first())
      .toPromise();

    this.profissoes = result.data.dadosGeral_Profissao.map<Profissao>(
      (p) => new Profissao(p.id, p.nome)
    );
  }

  onTapProfissao(id: number) {
    this.modalCtrl.dismiss({ id });
  }
}
