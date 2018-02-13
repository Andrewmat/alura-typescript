import { NegociacaoController } from './controllers/NegociacaoController';

const controller = new NegociacaoController();
$('.form').submit(controller.disparaAdiciona.bind(controller));
$('#btn-importa').click(controller.importaDados.bind(controller));