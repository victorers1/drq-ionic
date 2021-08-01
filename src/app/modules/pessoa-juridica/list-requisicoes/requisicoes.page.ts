import { Component, OnInit } from '@angular/core';
import { PessoaJuridica } from 'src/app/models/pessoas/pessoa-juridica/pessoa-juridica';
import { PessoaJuridicaService } from 'src/app/services/pessoa-juridica/pessoa-juridica.service';

@Component({
  selector: 'app-requisicoes',
  templateUrl: './requisicoes.page.html',
  styleUrls: ['./requisicoes.page.scss'],
})
export class RequisicoesPage implements OnInit {
  private usuario: PessoaJuridica;

  constructor(private usuarioCtrl: PessoaJuridicaService) {
    this.usuario = this.usuarioCtrl.usuario;
  }

  ngOnInit() {
    console.log('usuario:', this.usuario);
  }

  onSearchBarChange(event: Event) {
    console.log(`onSearchBarChange:`, event);
  }
}
