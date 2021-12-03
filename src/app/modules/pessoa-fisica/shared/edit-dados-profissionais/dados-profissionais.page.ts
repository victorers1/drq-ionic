import { WeekDay } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DRQRoutes } from 'src/app/constants';
import { Profissao } from 'src/app/models/geral/profissao';
import { Dado } from 'src/app/models/pessoas/dado';
import { DadosDeProfissao } from 'src/app/models/pessoas/pessoa-fisica/dados-profissao';
import { PessoaFisica } from 'src/app/models/pessoas/pessoa-fisica/pessoa-fisica';
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
  dadoProfissao: DadosDeProfissao;
  dadosProfissaoForm: FormGroup;

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit() {
    this.indexDadoProfissao = this.router.getCurrentNavigation().extras
      .state as unknown as number;
    console.log('DadosProfissionaisPage params: ', this.indexDadoProfissao);

    if (this.indexDadoProfissao) {
      this.getDadoProfissao();
    }
  }

  get nomeProfissao(): string {
    return this.dadoProfissao?.profissao?.nome ?? 'Não selecionada';
  }

  get nomeEspecialidade(): string {
    return this.dadoProfissao?.especialidade?.nome ?? 'Não selecionada';
  }

  private getDadoProfissao() {
    // TODO usar apollo p/ pegar do banco
    this.dadoProfissao = (
      this.usuarioService.get().usuario as PessoaFisica
    ).dadosProfissao[this.indexDadoProfissao];
  }

  saveDadosProfissionais() {
    console.log('saveDadosProfissionais()');
  }

  diaDaSemanaNome(dia: WeekDay): string {
    const nome = DateUtils.diaDaSemanaNome(dia, { capitalize: true });
    return StringUtils.capilatize(nome);
  }
}
