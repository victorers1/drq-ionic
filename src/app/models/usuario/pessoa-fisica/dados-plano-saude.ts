class DadosDePlanoDeSaude extends Dado {
    public contrato: String;

    constructor(
        public nome: String,
        public registro: String,
        public status: number = 0,
    ) {
        super();
    }
}