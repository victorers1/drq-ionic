import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {
  IPessoaFisicas,
  PROFISSIONAL_SAUDE_QUERY,
} from 'src/app/apollo-constants';
import { ApolloService } from 'src/app/services/apollo/apollo-service.service';

@Component({
  selector: 'app-select-profissional',
  templateUrl: './select-profissional.page.html',
  styleUrls: ['./select-profissional.page.scss'],
})
export class SelectProfissionalPage implements OnInit {
  profissionais: string[] = [];

  constructor(
    private modalCtrl: ModalController,
    private apolloService: ApolloService
  ) {}

  async ngOnInit() {
    const result = await this.apolloService.query<IPessoaFisicas>({
      query: PROFISSIONAL_SAUDE_QUERY,
      variables: {
        inicio: '00:00',
        pessoaJuridica: 1,
      },
    });

    this.profissionais = result.data.PessoaFisica.map((p) => p.nome);
  }

  buttonSair() {
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }
}
