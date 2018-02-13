import { Loggable } from '../models/index';

export function printLog(...loggables: Loggable[]): void {
  loggables.forEach(loggable => loggable.log());
}