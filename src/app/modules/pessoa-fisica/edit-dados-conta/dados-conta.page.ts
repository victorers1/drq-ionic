import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PessoaFisica } from 'src/app/models/usuario/pessoa-fisica/pessoa-fisica';
import { PessoaFisicaService } from 'src/app/services/pessoa-fisica/pessoa-fisica.service';

@Component({
  selector: 'app-dados-conta',
  templateUrl: './dados-conta.page.html',
  styleUrls: ['./dados-conta.page.scss'],
})
export class DadosContaPage implements OnInit {

  dadosContaForm: FormGroup;

  constructor(public usuarioCtrl: PessoaFisicaService) {
    let u = this.usuarioCtrl.usuario;

    this.dadosContaForm = new FormGroup({
      nome: new FormControl(u.nome, Validators.required),
      email: new FormControl(u.email, Validators.compose([Validators.required, Validators.email])),
      docFiscal: new FormControl(u.docFiscal, Validators.required),
      endLogradouro: new FormControl(u.endLogradouro, Validators.required),
      sexo: new FormControl(u.sexo, Validators.required),
      rg: new FormControl(u.rg),

    });
  }

  ngOnInit() {
  }

  saveDadosConta() {
    if (this.dadosContaForm.valid) {
      console.log(`Save dados de ${this.usuarioCtrl.usuario.nome}`);
    } else {
      console.log('Formulário inválido');
    }
  }
}
