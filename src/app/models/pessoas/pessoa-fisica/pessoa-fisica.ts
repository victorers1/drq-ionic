import { SEXO, STATUS_OBJETO } from 'src/app/constants';
import { Pessoa } from '../pessoa';
import { Dado } from '../dado';

export abstract class PessoaFisica extends Pessoa {
  public dadosProfissao: Dado[];
  public dadosBancarios: Dado[];
  public dadosPlanoSaude: Dado[];

  public rg: string;
  public email: string;
  public endCEP: string;

  constructor(
    username: string,
    nome: string,
    docFiscal: string,
    public foneUm: string,
    public endLogradouro: string,
    public endNumero: string,
    public endBairro: string,
    public endCidade: string,
    public endEstado: string,
    public endPais: string = 'BRASIL',
    public dataDeNascimento: Date = new Date(),
    public sexo: SEXO,
    public status: STATUS_OBJETO = STATUS_OBJETO.ATIVO
  ) {
    super(username, nome, docFiscal);
  }
}
