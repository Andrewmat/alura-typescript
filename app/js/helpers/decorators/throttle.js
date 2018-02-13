System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function throttle(timeout = 500) {
        let timer = 0;
        return function (target, key, descriptor) {
            const metodoOriginal = descriptor.value;
            descriptor.value = function (...args) {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    return metodoOriginal.apply(this, args);
                }, timeout);
            };
        };
    }
    exports_1("throttle", throttle);
    return {
        setters: [],
        execute: function () {
        }
    };
});
