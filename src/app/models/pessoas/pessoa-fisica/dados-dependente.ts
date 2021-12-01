import { Dado } from '../dado';

export class DadosDeDependente extends Dado {
  constructor(public id: number) {
    super();
  }
}
