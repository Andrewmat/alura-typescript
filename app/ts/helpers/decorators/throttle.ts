import { GeneratorBuilder } from "./index";

export function throttle(timeout: number = 500): Function {
  let timer = 0;

  return function(target: any, key: string, descriptor: PropertyDescriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function(...args: any[]) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        return metodoOriginal.apply(this, args);
      }, timeout);
    }
  }
}