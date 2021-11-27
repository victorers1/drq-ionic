import { Injectable } from '@angular/core';
import { SEXO, TIPO_USUARIO } from 'src/app/constants';
import { Paciente } from 'src/app/models/pessoas/pessoa-fisica/paciente';
import { Profissional } from 'src/app/models/pessoas/pessoa-fisica/profissional';
import { PessoaJuridica } from 'src/app/models/pessoas/pessoa-juridica/pessoa-juridica';
import { PacienteService } from './paciente.service';
import { PessoaJuridicaService } from './pessoa-juridica.service';
import { ProfissionalService } from './profissional.service';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';

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

  // Usuario Utils Functions
  isProfissional = (): boolean => this.tipoUsuario == TIPO_USUARIO.PROFISSIONAL;
  isPaciente = (): boolean => this.tipoUsuario == TIPO_USUARIO.PACIENTE;
  isPessoaJuridica = (): boolean =>
    this.tipoUsuario == TIPO_USUARIO.PESSOA_JURIDICA;

  getSexoByCod(id: number): SEXO {
    switch (id) {
      case SEXO.MASCULINO.valueOf():
        return SEXO.MASCULINO;
      case SEXO.FEMININO.valueOf():
        return SEXO.FEMININO;
      case SEXO.OUTRO.valueOf():
        return SEXO.OUTRO;
      case SEXO.PREFERE_NAO_DIZER.valueOf():
      default:
        return SEXO.PREFERE_NAO_DIZER;
    }
  }
}
