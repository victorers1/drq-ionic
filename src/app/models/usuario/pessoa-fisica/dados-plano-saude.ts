class DadosDePlanoDeSaude extends Dado {
    public contrato: string;

    constructor(
        public nome: string,
        public registro: string,
        public status: number = 0,
    ) {
        super();
    }
}