import { Injectable } from '@angular/core';
import { TIPO_PESSOA_JURIDICA } from 'src/app/constants';
import { PessoaJuridica } from 'src/app/models/usuario/pessoa-juridica/pessoa-juridica';

@Injectable({
  providedIn: 'root'
})
export class PessoaJuridicaService {
  usuario = new PessoaJuridica(
    'victorers1',
    'Centro de Saúde Soledade II',
    '80744850000133',
    'Centro de Sáude do Soledade II',
    'Melhor Centro de Sáude do Soledade II',
    '',
    TIPO_PESSOA_JURIDICA.MATRIZ
  );
  constructor() { }
}
