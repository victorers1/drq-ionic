import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

import { TIPO_USUARIO } from 'src/app/constants';
import { PacienteFactory } from 'src/app/models/factories/pessoa-fisica/paciente-factory';
import { PessoaFisicaFactory } from 'src/app/models/factories/pessoa-fisica/pessoa-fisica-factory';
import { ProfissionalFactory } from 'src/app/models/factories/pessoa-fisica/profissional-factory';
import { PessoaFisica } from 'src/app/models/pessoas/pessoa-fisica/pessoa-fisica';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-dados-conta',
  templateUrl: './dados-conta.page.html',
  styleUrls: ['./dados-conta.page.scss'],
})
export class DadosContaPage implements OnInit {
  dadosContaForm: FormGroup;

  constructor(
    private usuarioService: UsuarioService,
    private navCtrl: NavController
  ) {
    const u = this.usuarioService.get().usuario as PessoaFisica;

    this.dadosContaForm = new FormGroup({
      nome: new FormControl(u.nome, Validators.required),
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

      console.log({ usuarioAtualizado: this.usuarioService.get().usuario });

      this.navCtrl.pop();
    } else {
      console.log('Formulário inválido');
    }
  }
}
