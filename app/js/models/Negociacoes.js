System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negociacoes;
    return {
        setters: [],
        execute: function () {
            Negociacoes = class Negociacoes {
                constructor() {
                    this.negociacoes = [];
                }
                adiciona(negociacao) {
                    this.negociacoes.push(negociacao);
                }
                paraArray() {
                    return [].concat(this.negociacoes);
                }
                log() {
                    console.log(JSON.stringify(this.negociacoes));
                }
                equals(obj) {
                    return JSON.stringify(this) === JSON.stringify(obj);
                }
            };
            exports_1("Negociacoes", Negociacoes);
        }
    };
});
