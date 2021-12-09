import { SEXO } from 'src/app/constants';
import { PessoaFisica } from '../../pessoas/pessoa-fisica/pessoa-fisica';

export type IDadosIniciais = {
  id: number;
  email: string;
  nome: string;
  docFiscal: string;
};

export type IDadosAdicionais = {
  email: string;
  rg: string;
  sexo: SEXO;
  endLogradouro: string;
  endNumero: string;
  endComplemento: string;
  endCEP: string;
  endBairro: string;
  endCidade: string;
  endEstado: string;
  endPais: string;
  foneUm: string;
  dataDeNascimento: Date;
};

export abstract class PessoaFisicaFactory {
  public abstract factoryMethod(dados: IDadosIniciais): PessoaFisica;

  public criar(
    dadosIniciais: IDadosIniciais,
    dadosAdicionais: IDadosAdicionais
  ): PessoaFisica {
    const pessoa = this.factoryMethod(dadosIniciais);
    pessoa.preencherDados(dadosAdicionais);
    return pessoa;
  }
}
/**
 * Bibliografia:
 * * https://refactoring.guru/pt-br/design-patterns/factory-method/typescript/example
 */
