import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import {
  EDIT_DADOS_PESSOAIS_MUTATION,
  IUpdatePessoaFisica,
} from 'src/app/apollo-constants';
import { TIPO_USUARIO } from 'src/app/constants';
import { PacienteFactory } from 'src/app/models/factories/pessoa-fisica/paciente-factory';
import { PessoaFisicaFactory } from 'src/app/models/factories/pessoa-fisica/pessoa-fisica-factory';
import { ProfissionalFactory } from 'src/app/models/factories/pessoa-fisica/profissional-factory';
import { PessoaFisica } from 'src/app/models/pessoas/pessoa-fisica/pessoa-fisica';
import { ApolloService } from 'src/app/services/apollo/apollo-service.service';
import { ProfissionalService } from 'src/app/services/usuario/profissional.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { UsuarioUtils } from 'src/app/utils/usuario-utils';

@Component({
  selector: 'app-dados-conta',
  templateUrl: './dados-conta.page.html',
  styleUrls: ['./dados-conta.page.scss'],
})
export class DadosContaPage implements OnInit {
  dadosContaForm: FormGroup;

  constructor(
    private usuarioService: UsuarioService,
    private apolloService: ApolloService,
    private navCtrl: NavController
  ) {
    const u = this.usuarioService.get().usuario as PessoaFisica;

    this.dadosContaForm = new FormGroup({
      nome: new FormControl(u.nome, Validators.required),
      username: new FormControl(u.username, Validators.required),
      email: new FormControl(
        u.email,
        Validators.compose([Validators.required, Validators.email])
      ),
      docFiscal: new FormControl(u.docFiscal, Validators.required),
      rg: new FormControl(u.rg),
      sexo: new FormControl(u.sexo, Validators.required),
      endLogradouro: new FormControl(u.endLogradouro, Validators.required),
      endNumero: new FormControl(u.endNumero, Validators.required),
      endComplemento: new FormControl(u.endComplemento),
      endCEP: new FormControl(u.endCEP, Validators.required),
      endBairro: new FormControl(u.endBairro, Validators.required),
      foneUm: new FormControl(u.foneUm, Validators.required),
      dataDeNascimento: new FormControl(
        u.dataDeNascimento,
        Validators.required
      ),
    });
  }

  ngOnInit() {}

  async saveDadosConta() {
    if (this.dadosContaForm.valid) {
      console.log(`Save dados de:`, this.usuarioService.get().usuario);

      const result = await this.apolloService.mutate<IUpdatePessoaFisica>({
        mutation: EDIT_DADOS_PESSOAIS_MUTATION,
        variables: {
          id: this.usuarioService.get().usuario.id,
          nome: this.dadosContaForm.get('nome').value,
          username: this.dadosContaForm.get('username').value,
          email: this.dadosContaForm.get('email').value,
          docFiscal: this.dadosContaForm.get('docFiscal').value,
          rg: this.dadosContaForm.get('rg').value,
          sexo: this.dadosContaForm.get('sexo').value,
          endLogradouro: this.dadosContaForm.get('endLogradouro').value,
          endNumero: this.dadosContaForm.get('endNumero').value,
          endComplemento: this.dadosContaForm.get('endComplemento').value,
          endCEP: this.dadosContaForm.get('endCEP').value,
          endBairro: this.dadosContaForm.get('endBairro').value,
          // endCidade: this.dadosContaForm.get('endCidade').value,
          // endEstado: this.dadosContaForm.get('endEstado').value,
          foneUm: this.dadosContaForm.get('foneUm').value,
          dataDeNascimento: parseInt(
            this.dadosContaForm.get('dataDeNascimento').value
          ),
        },
      });

      console.log({ saveDadosConta: result });

      let pessoaFisicaFactory: PessoaFisicaFactory;
      switch (this.usuarioService.tipoUsuario) {
        case TIPO_USUARIO.PROFISSIONAL:
          pessoaFisicaFactory = new ProfissionalFactory();
          break;

        case TIPO_USUARIO.PACIENTE:
        default:
          pessoaFisicaFactory = new PacienteFactory();
          break;
      }
      this.usuarioService.get().usuario = pessoaFisicaFactory.criar(
        {
          id: this.usuarioService.get().usuario.id,
          nome: result.data.update_PessoaFisica_by_pk.nome,
          username: result.data.update_PessoaFisica_by_pk.username,
          docFiscal: result.data.update_PessoaFisica_by_pk.docFiscal,
        },
        {
          email: result.data.update_PessoaFisica_by_pk.email,
          rg: result.data.update_PessoaFisica_by_pk.rg,
          sexo: UsuarioUtils.getSexoByCod(
            result.data.update_PessoaFisica_by_pk.sexo
          ),
          endLogradouro: result.data.update_PessoaFisica_by_pk.endLogradouro,
          endNumero: result.data.update_PessoaFisica_by_pk.endNumero,
          endComplemento: result.data.update_PessoaFisica_by_pk.endComplemento,
          endCEP: result.data.update_PessoaFisica_by_pk.endCEP,
          endBairro: result.data.update_PessoaFisica_by_pk.endBairro,
          endCidade: result.data.update_PessoaFisica_by_pk.endCidade,
          endEstado: result.data.update_PessoaFisica_by_pk.endEstado,
          endPais: result.data.update_PessoaFisica_by_pk.endPais,
          foneUm: result.data.update_PessoaFisica_by_pk.foneUm,
          dataDeNascimento: new Date(
            result.data.update_PessoaFisica_by_pk.dataDeNascimento * 1e3
          ),
        }
      );

      this.navCtrl.pop();
    } else {
      console.log('Formulário inválido');
    }
  }
}
