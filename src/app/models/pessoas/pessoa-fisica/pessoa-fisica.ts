import { SEXO, STATUS_ENTIDADE } from 'src/app/constants';
import { Pessoa } from '../pessoa';
import { DadosDeProfissao } from './dados-profissao';
import { DadosBancarios } from './dados-bancarios';
import { DadosDePlanoDeSaude } from './dados-plano-saude';
import { DadosDeDependente } from './dados-dependente';
import { IDadosAdicionais } from '../../factories/pessoa-fisica/pessoa-fisica-factory';
import { UsuarioUtils } from 'src/app/utils/usuario-utils';

export abstract class PessoaFisica extends Pessoa {
  public dadosProfissao: DadosDeProfissao[];
  public dadosBancarios: DadosBancarios[];
  public dadosPlanoSaude: DadosDePlanoDeSaude[];
  public dadosDeDependente: DadosDeDependente[];

  // Dados Adicionais
  public rg: string;
  public foneUm: string;
  public endCEP: string;
  public endLogradouro: string;
  public endComplemento: string;
  public endNumero: string;
  public endBairro: string;
  public endCidade: string;
  public endEstado: string;
  public endPais: string = 'BRASIL';
  public dataDeNascimento: Date = new Date();
  public sexo: SEXO;

  constructor(
    id: number,
    email: string,
    nome: string,
    docFiscal: string,
    status: STATUS_ENTIDADE = STATUS_ENTIDADE.ATIVO
  ) {
    super(id, email, nome, docFiscal, status);
  }

  // * Criar funções específicas nas classes Profissional e Paciente caso os dados forem diferentes
  // No momento os dados são os mesmos
  preencherDados(dados: IDadosAdicionais): void {
    this.rg = dados.rg;
    this.foneUm = dados.foneUm;
    this.endCEP = dados.endCEP;
    this.endLogradouro = dados.endLogradouro;
    this.endComplemento = dados.endComplemento;
    this.endNumero = dados.endNumero;
    this.endBairro = dados.endBairro;
    this.endCidade = dados.endCidade;
    this.endEstado = dados.endEstado;
    this.endPais = dados.endPais;
    this.dataDeNascimento = dados.dataDeNascimento;
    this.sexo = UsuarioUtils.getSexoByCod(dados.sexo);
  }
}
