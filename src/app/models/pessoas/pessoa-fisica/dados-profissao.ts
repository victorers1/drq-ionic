import { ConselhoDeClasse } from '../../geral/conselho_de_classe';
import { Especialidade } from '../../geral/especialidade';
import { Profissao } from '../../geral/profissao';
import { Dado } from '../dado';
import { ExpedienteDePessoaFisica } from './expediente-pessoa-fisica';

export class DadosDeProfissao extends Dado {
  public expedientes: ExpedienteDePessoaFisica[] = [];

  public conselhoDeClasse: ConselhoDeClasse;

  constructor(
    public pessoaFisicaID: number = 0,
    public especialidade: Especialidade,
    public id?: number,
    public publico: boolean = false,
    public grauDeInstrucao: string = ''
  ) {
    super(publico, id);
  }

  get profissao(): Profissao | null {
    return this.especialidade?.profissao;
  }
  set profissao(p: Profissao) {
    this.especialidade = new Especialidade(0, '', p);
  }

  get nomeProfissao(): string {
    return this.profissao?.nome ?? 'não informada';
  }
  get nomeEspecialidade(): string {
    return this.especialidade?.nome ?? 'não informada';
  }
}
