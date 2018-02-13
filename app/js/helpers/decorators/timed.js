System.register(["./index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function timed() {
        let time;
        return new index_1.GeneratorBuilder()
            .before(() => {
            time = performance.now();
        })
            .after((target, key) => {
            time = performance.now() - time;
            console.log(`Time (${key}): ${time}ms`);
        })
            .build();
    }
    exports_1("timed", timed);
    var index_1;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
        }
    };
});
