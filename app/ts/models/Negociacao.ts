import { Generic } from './Generic';

export class Negociacao implements Generic<Negociacao> {
  constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) {}

  get volume() {
    return this.quantidade * this.valor;
  }

  log() {
    console.log(
`Data: ${this.data}
Quantidade: ${this.quantidade},
Valor: ${this.valor},
Volume: ${this.volume}`
    );
  }

  equals(obj: Negociacao): boolean {
    return this.quantidade === obj.quantidade
      && this.valor === obj.valor;
  }

}
