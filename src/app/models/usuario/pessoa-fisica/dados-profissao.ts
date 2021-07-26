class DadosDeProfissao extends Dado {
    public grauDeInstrucao: String;
    public especialidade: String;
    public conselhoDeClasseID: String;
    public conselhoDeClasse: String;

    constructor(
        public pessoaFisicaID: number = 0,
        public profissao: String,
        public status: number = 0,
    ) {
        super();
    }
}