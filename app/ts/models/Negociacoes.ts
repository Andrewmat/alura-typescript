import { Negociacao } from './Negociacao';
import { Generic } from './Generic';

export class Negociacoes implements Generic<Negociacoes> {

  private negociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao): void {
    this.negociacoes.push(negociacao);
  }

  paraArray(): Negociacao[] {
    return ([] as Negociacao[]).concat(this.negociacoes);
  }

  log(): void {
    console.log(JSON.stringify(this.negociacoes));
  }

  equals(obj: Negociacoes): boolean {
    return JSON.stringify(this) === JSON.stringify(obj);
  }
}
