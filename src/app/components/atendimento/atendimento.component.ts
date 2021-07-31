import { Component, Input, OnInit } from '@angular/core';
import { PessoaJuridica } from 'src/app/models/usuario/pessoa-juridica/pessoa-juridica';

@Component({
  selector: 'atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.scss'],
})
export class AtendimentoComponent implements OnInit {
  @Input('pessoaJuridica') pessoaJuridica: PessoaJuridica;

  constructor() { }

  ngOnInit() { }

}
