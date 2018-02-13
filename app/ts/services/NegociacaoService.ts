import { NegociacaoAPI, Negociacao } from "../models/index";

export class NegociacaoService {
  obterNegociacoes(handler: HandlerFunction): Promise<Negociacao[]> {
    return fetch('http://localhost:8080/dados')
      .then(resp => handler(resp))
      .then(resp => resp.json())
      .then((dados: NegociacaoAPI[]) =>
        dados.map(d => new Negociacao(new Date(), d.vezes, d.montante))
      )
      .catch((err: Error) => {
        console.error(err.message);
        throw new Error('Não deu certo pra importar nada');
      })
  }
}

export interface HandlerFunction {
  (res: Response): Response
}