import { STATUS_ENTIDADE } from 'src/app/constants';
import { PessoaFisica } from './pessoa-fisica';

export class Paciente extends PessoaFisica {
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
