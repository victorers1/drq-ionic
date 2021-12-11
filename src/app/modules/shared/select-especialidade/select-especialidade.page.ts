import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {
  IListaEspecialidade,
  LISTA_ESPECIALIDADES_QUERY,
} from 'src/app/apollo-constants';
import { Especialidade } from 'src/app/models/geral/especialidade';
import { ApolloService } from 'src/app/services/apollo/apollo-service.service';

@Component({
  selector: 'app-select-especialidade',
  templateUrl: './select-especialidade.page.html',
  styleUrls: ['./select-especialidade.page.scss'],
})
export class SelectEspecialidadePage implements OnInit {
  @Input() id: number;
  especialidades: Especialidade[] = [];

  constructor(
    private modalCtrl: ModalController,
    private apolloService: ApolloService
  ) {}

  async ngOnInit() {
    console.log('On Especialidade-Modal: ', { idProfissao: this.id });

    // TODO query de recuperar especialidades
    let result = await this.apolloService.query<IListaEspecialidade>({
      query: LISTA_ESPECIALIDADES_QUERY,
      variables: { id: this.id },
    });

    this.especialidades = result.data.dadosGeral_Especialidade.map(
      (e) => new Especialidade(e.id, e.nome)
    );
  }

  onTapEspecialidade(e: Especialidade) {
    this.modalCtrl.dismiss({ e });
  }
}
