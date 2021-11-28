import { Component, OnInit } from '@angular/core';
import { DRQRoutes, TIPO_USUARIO } from 'src/app/constants';
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
    switch (this.usuarioService.tipoUsuario) {
      case TIPO_USUARIO.PROFISSIONAL:
        this.pessoaFisicaService =
          this.usuarioService.get() as ProfissionalService;
        break;

      case TIPO_USUARIO.PACIENTE:
        this.pessoaFisicaService = this.usuarioService.get() as PacienteService;
        break;
      default:
        break;
    }

    this.pessoaFisica = this.pessoaFisicaService.usuario;

    // await this.pessoaFisicaService.getDadosBancarios(0);
    // await this.pessoaFisicaService.getDadosProfissao(0);
  }

  createDadoProfissional() {}

  createDadoBancario() {}

  createDadoPlanoSaude() {}
}
