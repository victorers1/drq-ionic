class DadosDeProfissao extends Dado {
    public grauDeInstrucao: string;
    public especialidade: string;
    public conselhoDeClasseID: string;
    public conselhoDeClasse: string;

    constructor(
        public pessoaFisicaID: number = 0,
        public profissao: string,
        public status: number = 0,
    ) {
        super();
    }
}