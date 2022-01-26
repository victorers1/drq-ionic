import { ConselhoDeClasse } from '../../geral/conselho_de_classe';
import { Especialidade } from '../../geral/especialidade';
import { Profissao } from '../../geral/profissao';
import { Dado } from '../dado';
import { ExpedienteDePessoaFisica } from './expediente-pessoa-fisica';

export class DadosDeProfissao extends Dado {
  public expedientes: ExpedienteDePessoaFisica[] = [];

  public profissao: Profissao;
  public conselhoDeClasse: ConselhoDeClasse;

  constructor(
    public pessoaFisicaID: number = 0,
    public especialidade: Especialidade,
    public publico: boolean = false,
    public grauDeInstrucao: string = ''
  ) {
    super(publico);
  }

  get nomeProfissao(): string {
    return this.profissao?.nome ?? 'não informada';
  }

  get nomeEspecialidade(): string {
    return this.especialidade?.nome ?? 'não informada';
  }

  set newProfissao(p: Profissao) {
    this.profissao = p;
    this.especialidade = null;
  }
}
