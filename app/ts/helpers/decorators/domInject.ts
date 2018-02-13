import { GeneratorBuilder } from './GeneratorBuilder';

export function domInject(selector: string): Function {
  let elem: JQuery | null = null;
  return new GeneratorBuilder()
    .getter(() => {
      if (elem === null) {
        elem = $(selector);
      }
      return elem;
    })
    .build();
}