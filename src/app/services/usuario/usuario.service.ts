import { Injectable } from '@angular/core';
import { Pessoa } from 'src/app/models/usuario/pessoa';
import { PessoaFisica } from 'src/app/models/usuario/pessoa-fisica/pessoa-fisica';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public usuario: Pessoa;

  constructor() {
    this.usuario = new PessoaFisica(
      'victorers2',
      'Victor Emanuel Ribeiro Silva',
      '0898328428',
      'victorers2@gmail.com',
      'Rua Hiroshi Ienaga',
      '1170',
      'Pajuçara',
      'Natal',
      'RN',
      'BRASIL',
      new Date(1996, 6, 13),
      'M',
      0
    );
  }
}
