import { Component, OnInit } from '@angular/core';
import { DRQRoutes } from 'src/app/constants';
import { Dado } from 'src/app/models/pessoas/dado';
import { DadosBancarios } from 'src/app/models/pessoas/pessoa-fisica/dados-bancarios';
import { DadosDeProfissao } from 'src/app/models/pessoas/pessoa-fisica/dados-profissao';
import { PessoaFisicaService } from 'src/app/services/pessoa-fisica/pessoa-fisica.service';

@Component({
  selector: 'app-config-dados',
  templateUrl: './config-dados.page.html',
  styleUrls: ['./config-dados.page.scss'],
})
export class ConfigDadosPage implements OnInit {
  routes = new DRQRoutes();

  dadosProfissao: Dado[] = [];
  dadosBancarios: Dado[] = [];

  constructor(public usuarioCtrl: PessoaFisicaService) {}

  async ngOnInit() {
    await this.usuarioCtrl.getDadosBancarios();
    await this.usuarioCtrl.getDadosProfissao();

    this.dadosBancarios = this.usuarioCtrl.usuario.dadosBancarios;
    this.dadosProfissao = this.usuarioCtrl.usuario.dadosProfissao;
  }

  createDadoProfissional() {}

  createDadoBancario() {}

  createDadoPlanoSaude() {}
}
