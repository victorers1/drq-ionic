import { Paciente } from '../../pessoas/pessoa-fisica/paciente';
import { PessoaFisica } from '../../pessoas/pessoa-fisica/pessoa-fisica';
import { IDadosIniciais, PessoaFisicaFactory } from './pessoa-fisica-factory';

export class PacienteFactory extends PessoaFisicaFactory {
  public factoryMethod(dados: IDadosIniciais): PessoaFisica {
    return new Paciente(dados.id, dados.username, dados.nome, dados.docFiscal);
  }
}
