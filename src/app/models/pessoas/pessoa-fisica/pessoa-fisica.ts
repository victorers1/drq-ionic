import { SEXO, STATUS_ENTIDADE } from 'src/app/constants';
import { Pessoa } from '../pessoa';
import { DadosDeProfissao } from './dados-profissao';
import { DadosBancarios } from './dados-bancarios';
import { DadosDePlanoDeSaude } from './dados-plano-saude';
import { DadosDeDependente } from './dados-dependente';

export abstract class PessoaFisica extends Pessoa {
  public dadosProfissao: DadosDeProfissao[];
  public dadosBancarios: DadosBancarios[];
  public dadosPlanoSaude: DadosDePlanoDeSaude[];
  public dadosDeDependente: DadosDeDependente[];

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
