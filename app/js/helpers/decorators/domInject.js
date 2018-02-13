System.register(["./GeneratorBuilder"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function domInject(selector) {
        let elem = null;
        return new GeneratorBuilder_1.GeneratorBuilder()
            .getter(() => {
            if (elem === null) {
                elem = $(selector);
            }
            return elem;
        })
            .build();
    }
    exports_1("domInject", domInject);
    var GeneratorBuilder_1;
    return {
        setters: [
            function (GeneratorBuilder_1_1) {
                GeneratorBuilder_1 = GeneratorBuilder_1_1;
            }
        ],
        execute: function () {
        }
    };
});
