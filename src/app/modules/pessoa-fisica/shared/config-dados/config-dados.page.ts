import { Component, OnInit } from '@angular/core';
import { DRQRoutes } from 'src/app/constants';
import { Dado } from 'src/app/models/pessoas/dado';
import { DadosBancarios } from 'src/app/models/pessoas/pessoa-fisica/dados-bancarios';
import { DadosDeProfissao } from 'src/app/models/pessoas/pessoa-fisica/dados-profissao';
import { Paciente } from 'src/app/models/pessoas/pessoa-fisica/paciente';
import { PessoaFisica } from 'src/app/models/pessoas/pessoa-fisica/pessoa-fisica';
import { PacienteService } from 'src/app/services/usuario/paciente.service';
import { ProfissionalService } from 'src/app/services/usuario/profissional.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-config-dados',
  templateUrl: './config-dados.page.html',
  styleUrls: ['./config-dados.page.scss'],
})
export class ConfigDadosPage implements OnInit {
  routes = new DRQRoutes();

  pessoaFisicaService: PacienteService | ProfissionalService;
  pessoaFisica: PessoaFisica;

  dadosProfissao: DadosDeProfissao[] = [];
  dadosBancarios: DadosBancarios[] = [];

  constructor(public usuarioService: UsuarioService) {}

  async ngOnInit() {
    // TODO: carregar todos os dados da API
    this.pessoaFisicaService = this.usuarioService.get() as
      | PacienteService
      | ProfissionalService;
    this.pessoaFisica = this.pessoaFisicaService.usuario as Paciente;

    await this.pessoaFisicaService.getDadosBancarios(0);
    await this.pessoaFisicaService.getDadosProfissao(0);

    this.dadosBancarios = this.pessoaFisica.dadosBancarios as DadosBancarios[];
    this.dadosProfissao = this.pessoaFisica
      .dadosProfissao as DadosDeProfissao[];
  }

  createDadoProfissional() {}

  createDadoBancario() {}

  createDadoPlanoSaude() {}
}
