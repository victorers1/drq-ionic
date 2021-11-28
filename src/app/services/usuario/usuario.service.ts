import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { SEXO, TIPO_USUARIO } from 'src/app/constants';
import { Dado } from 'src/app/models/pessoas/dado';
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
  tipoUsuario: TIPO_USUARIO;

  constructor(
    private pacienteService: PacienteService,
    private profissionalService: ProfissionalService,
    private pessoaJuridicaService: PessoaJuridicaService,
    private apollo: Apollo
  ) {
    // ! Setar tipousuario
  }

  get() {
    console.log(`UsuarioService.get(${this.tipoUsuario})`);
    switch (this.tipoUsuario) {
      case TIPO_USUARIO.PROFISSIONAL:
        return this.profissionalService;
      case TIPO_USUARIO.PESSOA_JURIDICA:
        return this.pessoaJuridicaService;
      case TIPO_USUARIO.PACIENTE:
        return this.pacienteService;
      default:
    }
  }

  async getDadosProfissao(idPessoa: number): Promise<void> {
    // Array<Dado> dados =  await this.apollo.watchQuery({
    // }).valueChanges.toPromise();
  }

  async getDadosBancarios(idPessoa: number): Promise<void> {}

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
