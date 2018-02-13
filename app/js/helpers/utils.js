System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function printLog(...loggables) {
        loggables.forEach(loggable => loggable.log());
    }
    exports_1("printLog", printLog);
    return {
        setters: [],
        execute: function () {
        }
    };
});
