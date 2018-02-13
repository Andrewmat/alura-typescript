import { Negociacao, Negociacoes, NegociacaoAPI } from '../models/index';
import { NegociacoesView, MensagemView } from '../views/index';
import { domInject, throttle } from '../helpers/decorators/index';
import { NegociacaoService, HandlerFunction } from '../services/index';
import { printLog } from '../helpers/index';

export class NegociacaoController {

  @domInject('#data')
  private inputData: JQuery;

  @domInject('#quantidade')
  private inputQuantidade: JQuery;

  @domInject('#valor')
  private inputValor: JQuery;

  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView('#negociacoesView', true);
  private mensagemView = new MensagemView('#mensagemView');

  private negociacaoService = new NegociacaoService();

  constructor() {
    this.negociacoesView.update(this.negociacoes);
  }

  disparaAdiciona(event: Event) : void {
    event.preventDefault();
    this.adiciona();
  }

  @throttle()
  private adiciona() {

    const date = new Date(this.inputData.val().replace(/-/g, ','));

    if (!this.isDiaUtil(date)) {
      this.mensagemView.update('FIM DE SEMANA NÃO É PRA NEGOCIAR NÃO');
      return;
    }

    const negociacao = new Negociacao(
      date,
      parseInt(this.inputQuantidade.val()),
      parseFloat(this.inputValor.val())
    );

    this.negociacoes.adiciona(negociacao);

    this.negociacoesView.update(this.negociacoes);
    this.mensagemView.update('Negociação adicionada com sucesso!');

    printLog(negociacao, this.negociacoes);
  }

  @throttle(500)
  async importaDados(event: Event) {
    event.preventDefault();

    try {
      const negs = await this.negociacaoService.obterNegociacoes(res => {
        if (res.ok) {
          return res;
        } else {
          throw new Error(res.statusText);
        }
      });

      const imported = this.negociacoes.paraArray();
      negs
        // filter already imported
        .filter(neg => !imported.some(imp => imp.equals(neg)))
        // adds to main array
        .forEach(n => this.negociacoes.adiciona(n));

      // updates view
      this.negociacoesView.update(this.negociacoes);

    } catch(err) {
      this.mensagemView.update(err.message);
    }
  }

  private isDiaUtil(date: Date) {
    return date.getDay() !== DiaDaSemana.Sabado
    && date.getDay() !== DiaDaSemana.Domingo;
  }
}

enum DiaDaSemana {
  Domingo,
  Segunda,
  Terça,
  Quarta,
  Quinta,
  Sexta,
  Sabado
};
