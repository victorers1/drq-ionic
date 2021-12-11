import { ConselhoDeClasse } from '../../geral/conselho_de_classe';
import { Especialidade } from '../../geral/especialidade';
import { Profissao } from '../../geral/profissao';
import { Dado } from '../dado';
import { ExpedienteDePessoaFisica } from './expediente-pessoa-fisica';

export class DadosDeProfissao extends Dado {
  public expedientes: ExpedienteDePessoaFisica[] = [];

  public grauDeInstrucao: string;
  public especialidade: Especialidade;
  public conselhoDeClasse: ConselhoDeClasse;

  constructor(
    public pessoaFisicaID: number = 0,
    public profissao: Profissao,
    public publico: boolean = false
  ) {
    super(publico);
  }

  get nomeProfissao(): string {
    return this.profissao?.nome ?? 'Profissão não informada';
  }

  get nomeEspecialidade(): string {
    return this.especialidade?.nome ?? 'Especialidade não informada';
  }
}
