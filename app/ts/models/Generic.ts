import { Loggable } from './Loggable';
import { Equable } from './Equable';

export interface Generic<T> extends Loggable, Equable<T> {}