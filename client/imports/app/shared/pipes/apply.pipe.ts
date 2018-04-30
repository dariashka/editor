import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'apply' })
export class ApplyPipe implements PipeTransform {
  /**
   *
   * @param value
   * @param func
   * @param args
   * @returns value
   */
  transform<T, R>(value: T, func: (value: T) => R, ...args: Array<any>): R {
    return func(value, ...args);
  }
}
