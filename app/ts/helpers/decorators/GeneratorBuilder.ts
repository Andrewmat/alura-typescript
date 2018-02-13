
export class GeneratorBuilder {
  private beforeFn: Function;
  private afterFn: Function;
  private getterFn: Function;

  before(fn: Function): GeneratorBuilder {
    this.beforeFn = fn;
    return this;
  }
  after(fn: Function): GeneratorBuilder {
    this.afterFn = fn;
    return this;
  }
  getter(fn: Function): GeneratorBuilder {
    this.getterFn = fn;
    return this;
  }

  build(): Function {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
      let self = this;

      if (this.getterFn) {
        Object.defineProperty(target, key, {
          get: <any>this.getterFn
        });
      }

      if (descriptor) {
        const originalFunction = descriptor.value;
        descriptor.value = function(...args: any[]) {
          if (self.beforeFn) {
            self.beforeFn(target, key, descriptor);
          }
          const ret = originalFunction.apply(this, args);
          if (self.afterFn) {
            self.afterFn(target, key, descriptor);
          }
          // end after
          return ret;
        };
        return descriptor;
      }
    };
  }
}