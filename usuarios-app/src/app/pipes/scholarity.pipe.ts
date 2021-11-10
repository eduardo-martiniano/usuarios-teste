import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'scholarity'
})
export class ScholarityPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let scholarity = "Infantil"

    switch (value) {
      case 1: {
        scholarity = "Fundamental";
        break;
      }

      case 2: {
        scholarity = "Médio";
        break;
      }

      case 3: {
        scholarity = "Superior";
        break;
      }

    }
    return scholarity;
  }

}
