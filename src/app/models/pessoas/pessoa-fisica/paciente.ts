import { STATUS_ENTIDADE } from 'src/app/constants';
import { PessoaFisica } from './pessoa-fisica';

export class Paciente extends PessoaFisica {
  constructor(id: number, email: string, nome: string, docFiscal: string) {
    super(id, email, nome, docFiscal);
  }
}
