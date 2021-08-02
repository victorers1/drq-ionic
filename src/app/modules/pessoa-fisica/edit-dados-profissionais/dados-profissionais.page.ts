import { WeekDay } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DRQRoutes } from 'src/app/constants';
import { DadosDeProfissao } from 'src/app/models/pessoas/pessoa-fisica/dados-profissao';
import { PessoaFisicaService } from 'src/app/services/pessoa-fisica/pessoa-fisica.service';
import { DateUtils } from 'src/app/utils/date-utils';
import { StringUtils } from 'src/app/utils/string-utils';

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

      this.indexDadoProfissao = params[this.routes.PARAM_INDEX_DADO_PROFISSAO];
      this.dadoProfissao = this.usuarioService.usuario.dadosProfissao[this.indexDadoProfissao];

      this.dadosProfissaoForm = new FormGroup({
        profissao: new FormControl(this.dadoProfissao.profissao, Validators.required),
        especialidade: new FormControl(this.dadoProfissao.especialidade),
        conselhoDeClasse: new FormControl(this.dadoProfissao.conselhoDeClasse),
        grauDeInstrucao: new FormControl(this.dadoProfissao.grauDeInstrucao),
      });
    });
  }

  ngOnInit() { }

  saveDadosProfissionais() {
    console.log('saveDadosProfissionais()');
  }

  diaDaSemanaNome(dia: WeekDay): string {
    const nome = DateUtils.diaDaSemanaNome(dia, { capitalize: true });
    return StringUtils.capilatize(nome);
  }
}
