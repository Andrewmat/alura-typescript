System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var GeneratorBuilder;
    return {
        setters: [],
        execute: function () {
            GeneratorBuilder = class GeneratorBuilder {
                before(fn) {
                    this.beforeFn = fn;
                    return this;
                }
                after(fn) {
                    this.afterFn = fn;
                    return this;
                }
                getter(fn) {
                    this.getterFn = fn;
                    return this;
                }
                build() {
                    return (target, key, descriptor) => {
                        let self = this;
                        if (this.getterFn) {
                            Object.defineProperty(target, key, {
                                get: this.getterFn
                            });
                        }
                        if (descriptor) {
                            const originalFunction = descriptor.value;
                            descriptor.value = function (...args) {
                                if (self.beforeFn) {
                                    self.beforeFn(target, key, descriptor);
                                }
                                const ret = originalFunction.apply(this, args);
                                if (self.afterFn) {
                                    self.afterFn(target, key, descriptor);
                                }
                                return ret;
                            };
                            return descriptor;
                        }
                    };
                }
            };
            exports_1("GeneratorBuilder", GeneratorBuilder);
        }
    };
});
