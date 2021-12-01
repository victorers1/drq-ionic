import { SEXO, STATUS_ENTIDADE } from 'src/app/constants';
import { Pessoa } from '../pessoa';
import { Dado } from '../dado';

export abstract class PessoaFisica extends Pessoa {
  public dadosProfissao: Dado[];
  public dadosBancarios: Dado[];
  public dadosPlanoSaude: Dado[];
  public dadosDeDependente: Dado[];

  public rg: string;
  public email: string;
  public foneUm: string;
  public endCEP: string;
  public endLogradouro: string;
  public endNumero: string;
  public endBairro: string;
  public endCidade: string;
  public endEstado: string;
  public endPais: string = 'BRASIL';
  public dataDeNascimento: Date = new Date();
  public sexo: SEXO;

  constructor(
    id: number,
    username: string,
    nome: string,
    docFiscal: string,
    status?: STATUS_ENTIDADE
  ) {
    super(id, username, nome, docFiscal, status);
  }
}
