import { Injectable } from '@angular/core';
import { PessoaJuridica } from 'src/app/models/usuario/pessoa-juridica/pessoa-juridica';

@Injectable({
  providedIn: 'root'
})
export class PessoaJuridicaService {
  usuario = new PessoaJuridica(
    'victorers1',
    'Centro de Saúde Soledade II',
    '80744850000133',
    'centrosoledade2@gmail.com',
    'Rua Rio do Sul ',
    '1170',
    'Potengi',
    'Natal',
    'RN',
    'BRASIL',
    'Centro Soledade II',
    'Melhor centro de saúde do Soledade II',
    'Humanos',
    '',
    0
  );

  constructor() { }


}
