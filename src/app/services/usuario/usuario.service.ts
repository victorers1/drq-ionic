import { Injectable } from '@angular/core';
import { TIPO_USUARIO } from 'src/app/constants';
import { Paciente } from 'src/app/models/pessoas/pessoa-fisica/paciente';
import { Profissional } from 'src/app/models/pessoas/pessoa-fisica/profissional';
import { PessoaJuridica } from 'src/app/models/pessoas/pessoa-juridica/pessoa-juridica';
import { PacienteService } from './paciente.service';
import { PessoaJuridicaService } from './pessoa-juridica.service';
import { ProfissionalService } from './profissional.service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  usuario: Paciente | Profissional | PessoaJuridica;
  tipoUsuario: TIPO_USUARIO;

  constructor(
    private pacienteService: PacienteService,
    private profissionalService: ProfissionalService,
    private pessoaJuridicaService: PessoaJuridicaService
  ) {}

  get() {
    console.log(`UsuarioService.get(${this.tipoUsuario})`);

    switch (this.tipoUsuario) {
      case TIPO_USUARIO.PROFISSIONAL:
        return this.profissionalService;

      case TIPO_USUARIO.PESSOA_JURIDICA:
        return this.pessoaJuridicaService;

      case TIPO_USUARIO.PACIENTE:
      default:
        return this.pacienteService;
    }
  }

  isProfissional = (): boolean => this.tipoUsuario == TIPO_USUARIO.PROFISSIONAL;
  isPaciente = (): boolean => this.tipoUsuario == TIPO_USUARIO.PACIENTE;
  isPessoaJuridica = (): boolean =>
    this.tipoUsuario == TIPO_USUARIO.PESSOA_JURIDICA;
}
