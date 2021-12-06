import { PessoaFisica } from '../../pessoas/pessoa-fisica/pessoa-fisica';
import { Profissional } from '../../pessoas/pessoa-fisica/profissional';
import { IDadosIniciais, PessoaFisicaFactory } from './pessoa-fisica-factory';

export class ProfissionalFactory extends PessoaFisicaFactory {
  public factoryMethod(dados: IDadosIniciais): PessoaFisica {
    return new Profissional(
      dados.id,
      dados.username,
      dados.nome,
      dados.docFiscal
    );
  }
}
