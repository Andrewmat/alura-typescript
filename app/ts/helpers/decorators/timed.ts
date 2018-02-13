import { GeneratorBuilder } from './index';

export function timed(): Function {
  let time: number;

  return new GeneratorBuilder()
    .before(() => {
      time = performance.now();
    })
    .after((target: any, key: string) => {
      time = performance.now() - time;
      console.log(`Time (${key}): ${time}ms`);
    })
    .build();
}