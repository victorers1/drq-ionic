import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DRQRoutes } from 'src/app/constants';
import { DadosDeProfissao } from 'src/app/models/usuario/pessoa-fisica/dados-profissao';
import { PessoaFisicaService } from 'src/app/services/pessoa-fisica/pessoa-fisica.service';

@Component({
  selector: 'app-dados-profissionais',
  templateUrl: './dados-profissionais.page.html',
  styleUrls: ['./dados-profissionais.page.scss'],
})
export class DadosProfissionaisPage implements OnInit {
  routes = new DRQRoutes();

  indexDadoProfissao: number;
  dadoProfissao: DadosDeProfissao;
  dadosProfissaoForm: FormGroup;

  constructor(private route: ActivatedRoute, private usuarioService: PessoaFisicaService) {

    this.route.params.subscribe((params) => {
      console.log('DadosProfissionaisPage params: ', params);

      this.indexDadoProfissao = params[this.routes.PARAM_DADO_PROFISSAO];
      this.dadoProfissao = this.usuarioService.usuario.dadosProfissao[this.indexDadoProfissao];

      this.dadosProfissaoForm = new FormGroup({
        profissao: new FormControl(this.dadoProfissao.profissao, Validators.required),
        especialidade: new FormControl(this.dadoProfissao.especialidade),
        conselhoDeClasse: new FormControl(this.dadoProfissao.conselhoDeClasse),
        grauDeInstrucao: new FormControl(this.dadoProfissao.grauDeInstrucao),
      });
    });
  }

  ngOnInit() {
  }

  saveDadosProfissionais() {
    console.log('saveDadosProfissionais()');
  }
}
