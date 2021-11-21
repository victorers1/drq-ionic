import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pessoa } from 'src/app/models/pessoas/pessoa';
import { PessoaFisica } from 'src/app/models/pessoas/pessoa-fisica/pessoa-fisica';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-dados-conta',
  templateUrl: './dados-conta.page.html',
  styleUrls: ['./dados-conta.page.scss'],
})
export class DadosContaPage implements OnInit {
  dadosContaForm: FormGroup;

  constructor(public usuarioService: UsuarioService) {
    let u = this.usuarioService.usuario as PessoaFisica;

    this.dadosContaForm = new FormGroup({
      nome: new FormControl(u.nome, Validators.required),
      email: new FormControl(
        u.email,
        Validators.compose([Validators.required, Validators.email])
      ),
      docFiscal: new FormControl(u.docFiscal, Validators.required),
      endLogradouro: new FormControl(u.endLogradouro, Validators.required),
      sexo: new FormControl(u.sexo, Validators.required),
      rg: new FormControl(u.rg),
    });
  }

  ngOnInit() {}

  saveDadosConta() {
    if (this.dadosContaForm.valid) {
      console.log(`Save dados de ${this.usuarioService.usuario.nome}`);
    } else {
      console.log('Formulário inválido');
    }
  }
}
