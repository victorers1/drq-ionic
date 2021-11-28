import { WeekDay } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DRQRoutes } from 'src/app/constants';
import { Dado } from 'src/app/models/pessoas/dado';
import { DadosDeProfissao } from 'src/app/models/pessoas/pessoa-fisica/dados-profissao';
import { PessoaFisica } from 'src/app/models/pessoas/pessoa-fisica/pessoa-fisica';
import { PacienteService } from 'src/app/services/usuario/paciente.service';
import { ProfissionalService } from 'src/app/services/usuario/profissional.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
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
  dadoProfissao: Dado;
  dadosProfissaoForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService
  ) {
    this.route.params.subscribe((params) => {
      console.log('DadosProfissionaisPage params: ', params);

      this.indexDadoProfissao = params[this.routes.PARAM_INDEX_DADO_PROFISSAO];
      this.dadoProfissao = (
        this.usuarioService.get().usuario as PessoaFisica
      ).dadosProfissao[this.indexDadoProfissao];

      this.dadosProfissaoForm = new FormGroup({
        profissao: new FormControl(
          (this.dadoProfissao as DadosDeProfissao).profissao,
          Validators.required
        ),
        especialidade: new FormControl(
          (this.dadoProfissao as DadosDeProfissao).especialidade
        ),
        conselhoDeClasse: new FormControl(
          (this.dadoProfissao as DadosDeProfissao).conselhoDeClasse
        ),
        grauDeInstrucao: new FormControl(
          (this.dadoProfissao as DadosDeProfissao).grauDeInstrucao
        ),
      });
    });
  }

  ngOnInit() {}

  saveDadosProfissionais() {
    console.log('saveDadosProfissionais()');
  }

  diaDaSemanaNome(dia: WeekDay): string {
    const nome = DateUtils.diaDaSemanaNome(dia, { capitalize: true });
    return StringUtils.capilatize(nome);
  }
}
